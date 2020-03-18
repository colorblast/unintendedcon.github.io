---
layout: post
title: Prototyping a SaaS Backend with Responder and EdgeDB
date: 2020-01-16 21:17 -0400
description: >-
    Building a backend is hard, especially when bootstrapping a SaaS. Here's how to handle the auth part, using Responder and EdgeDB.
keywords:
    - SaaS
    - EdgeDB
    - Authentication
    - Responder
    - Python
---

This guide is best for people who want to get started with bootstrapping a SaaS in a fast manner, but with a relational database. There are a number of reasons to pick a relational database over a NoSQL database, but we won't go over them here.

We are going to use [responder](https://responder.kennethreitz.org/en/latest/index.html), a web and API framework, developed by Kenneth Reitz to interface with our database, [EdgeDB](https://edgedb.com), by [magicstack](http://magic.io). These were picked because of their relative simplicity and easiness to learn.

## Initial API setup

To start, you should install a python package manager for your system. The one I recommend, is `pipenv` as it allows you to easily port and share your projects with other people. [Pipenv](https://pipenv.kennethreitz.org/en/latest/) can be downloaded from PyPa or your system package manager.

Once you have pipenv set up, you should install our required packages. We will be using three, `responder`, `edgedb`, and `validators`. Validators takes care of some basic data and form validation for us.

```shell
pipenv install responder edgedb validators
```

We now have the libraries neccesary for establishing our python API. We can now create a file, called *main.py* to house our API code. It really doesn't matter what this file name is, so feel free to change it.

```
touch main.py
```

Responder is an ASGI framework, which means that we can do asynchronous operations. To create a basic responder app, we can follow the tutorial and define a simple endpoint.

```python
import responder

api = responder.API()
@api.route("/{greeting}")
async def greet_world(req, res, *, greeting):
    resp.text = f"{greeting}, world!"

if __name__ == '__main__':
    api.run()
```

Let's go over this code line by line.

`import responder` imports the responder library, so that we can use it later.

`api = responder.API()` establishes a responder app that we can run.

`@api.route("/{greeting}")` declares that this API has an endpoint or route. If you're unsure of what an endpoint is, then think of it as a specific page or pattern of pages. The route we're setting up here is dynamic, and pattern-based. The variable, `greeting` is enclosed in curly brackets to show that this is a dynamic route.

`async def greet_world(req, res, *, greeting):` declares a function that should run when a client (user) visits this endpoint. `greet_world ` takes 4 paramaters, `req`, `res`, `*`, and `greeting`. `req` and `res` stand for request and response, and represent the data coming to the server and the data coming out. `*` is needed because we are using dynamic routes, which require an unknown amount of variables for endpoint patterns. `greeting` is a dynamic variable, which neccesitates `*`.

`resp.text = f"{greeting}, world!` modifies the response object such that it's text will return a dynamic message based off `greeting`. You can learn more about request and response objects at [requests](https://requests.readthedocs.io/en/master/).

`if __name__ == '__main__':` uses some default python properties to establish that if this file is run, do what's below.

`api.run()` runs the app.

We can now save this file and test to see whether our endpoint is working.

`pipenv run python3 main.py`

The default port that responder uses is *5042*, on localhost. You should be able to find it at `localhost:5042/<some greeting you put in>`.

Now knowing that's working, we're going to shift towards setting up the database, before resuming working on the endpoints.

## Database setup

EdgeDB is available for Unix, macOS, and docker. I've found that when I attempt to install EdgeDB on macOS that the package doesn't quite install properly given that this is still alpha software.

The recommended method (and the way I did it) is through [Docker](https://www.docker.com). If you are unsure of what docker is, I was unsure of it too, up until yesterday.

Think of docker as an environment package manager, like pipenv. Instead of allowing us to port our project and it's environment, docker ports the entire operating system so that we can maintain better reproducibility. This is good for microservice architecture, where we may have many running parts that are tightly integrated with one another. It also makes docker cross-platform so any Windows users following this tutorial can continue.

To use docker, you should download it using your appropriate system package manager or through the official docker website. If you're doing this on Windows or macOS, I recommend downloading it from the site.

To download and enable it on Linux (particularly RHEL and SELinux based distros), you should run the following series of commands.

```shell
sudo dnf install docker
sudo systemctl start docker
```

This installs and runs the docker service. Upon doing this, you should be able to run docker containers. Docker maintains a large repository of pre-created docker containers in a central location called the [Docker Hub](https://hub.docker.com). This enables fast environment creation, as you are able to build upon and use other containers in your own.

EdgeDB maintains a container at the Docker Hub. To get this container, you should run the following:

`docker pull edgedb/edgedb`

This pulls the official container, maintained by magicstack.

To now run the container, we can follow the instructions given on the EdgeDB download site.

```
docker run --it --rm -p 5656:5656 -p 8888:8888 --name=edgedb-server -v <datadir>:/var/lib/edgedb/data edgedb/edgedb
```

You should replace **&lt;datadir&gt;** with the full path of a directory that you will use to store the edgedb data.

If you're attempting to run this on any RHEL or SELinux based distro, like I was, you should add `--privileged` to get the docker container running.

Now that we have an edgedb instance running, we should instantiate our database. We can instantiate it by opening up a CLI inside the database.

Since we're running this in docker, we can't do this directly. What we need to do is spin up another docker instance containing this shell, that can connect to the database.

This is done through a similar command.

```
docker run --link=edgedb-server --rm -it edgedb/edgedb:latest edgedb -u edgedb -h edgedb-server
```

If you're using a RHEL or SELinux based distro, add `--privileged` again.

We now have an edgedb prompt and can instantiate a database.

```
CREATE DATABASE saas_app;
\c saas_app
```

\c is a command to connect to the database.

The next thing to do is setup a schema for this database. If you don't know what a schema is, think of it as an outline of all the objects and things that go into this database and their relevant properties. We're gonna setup a really basic barebones schema.

```
START TRANSACTION;
CREATE MIGRATION  users TO {
    type User {
        required property email -> str;
        required property passwordHash -> str;
        required property active -> bool;
    }
};
COMMIT MIGRATION users;
COMMIT;
```
I just threw alot at you, so I'll go over it line by line.

`START TRANSACTION` enables us to modify or change the schema.

`CREATE MIGRATION users TO {` is where we declare a data migration *users*, that is a change to the schema.

```
type User {
    required property email -> str;
    required property passwordHash -> str;
    required property active -> bool;
}
```

This defines what object we're creating, its properties, and the type of its properties. We see here that we are defining a User model, with three properties, email, passwordHash, and active. Email and passwordHash are strings and active is a boolean. We require all of them.

`COMMIT MIGRATION users` makes the migration happen in the database.

`COMMIT` ends the transaction.

<hr>

If you, at any point in doing this, end up screwing up and get an error, do not fear.

`TransactionError: current transaction is aborted, commands ignored until end of transaction block`

Since an error happened, edgedb won't let the migration continue. To fix this, run a rollback.

```
ROLLBACK;
```

You can then start the migration / schema from the beginning again.

<hr>

Quitting the edgedb console is as simple as `\q `.

## Further API Setup

We can now move back to the python API we were setting up.

A SaaS needs to have user accounts. This means that we need at minimum, two endpoints, **/signup** and **/login**. We can declare these routes and get rid of the greetings code from earlier.

```python
import responder
import validators
import edgedb

api = responder.API()

@api.route("/signup")
    async def signup(req, resp):
        ...

@api.route("/login")
    async def login(req, resp):
        ...
```

You can see that we've removed the `*` and `greetings` parameters from earlier, because these are not going to be dynamic routes.

We're gonna split up the writing of these methods into two parts, data validation, and database entry.

### Data Validation

We can't be sure that whatever is being sent to this server is not malicious. We also have to be aware that users can make dumb mistakes and just do stupid stuff. In order to combat this, we need to implement a couple of measures to make it harder.

The first thing we'll do is restrict the methods available for accessing this API. There are different HTTP methods for accessing a resource. We just want to allow requests that are are making POST requests, as they are sending us data that we respond back with. We can check if the request is of type POST with the following conditional:

```python
if req.method == "post":
```

We check the client's request to ensure that it is of type post. POST must be lowercased, in order to meet responder's specs.

We can put `pass` inside the if conditional, and return a different HTTP status code in the else statement. The full block looks like this:

```python
if req.method == "post":
    pass
else:
    resp.status_code = api.status_codes.HTTP_405
    resp.text = "405 Method Not Allowed"
    return
```

We modify the response object that we'll send out to tell the client that the method in question is not allowed. You can find a full set of HTTP status codes on [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

If you'd like to return a different status code, you can change the number that's appended at the end of `api.status_codes` to match the error you'd like to send.

The next step of validation is ensuring that whatever sent actually is what it's supposed to be. For **/signup** and **/login** that means two parameters.

* email
* passwordHash

We need to make sure that *email* is actually an email. We can also impose a length max for *passwordHash* to ensure no flooding.

This is where [**validators**](https://validators.readthedocs.io/en/latest/), the library I mentioned earlier, comes in. It's a no nonsense fast way to validate stuff, and isn't as complicated as other popular validation schema libraries.

We first need to get the response content. Since **responder** is an asynchronous framework, we need to wait until all of the request is loaded. To do this, we need to use `await`.

```python
info = await req.media()
```

We await the data (`req.media()`) from the response. We can then get the field names and store them variables.

```python
email = info.get("email")
passwordHash = info.get("passwordHash")
```

This done, we can now perform the data validation scheme.

```python
if validators.email(email) and len(passwordHash) == 32:
    pass
else:
    resp.status_code = api.status_codes.HTTP_400
    resp.text = "400 Bad Request"
    return
```

This ensures that we are, in fact, getting an email, and that the passwordHash is a hash. We can now move on to data entry and connection.

### Data Entry

We must first connect to our database. Relevant documention for the edgedb python driver is [here](https://edgedb.com/docs/clients/00_python/usage).

```python
conn = await edgedb.async_connect('edgedb://edgedb@localhost/saas_app')
```

The nice thing about setting up edgeDB using docker, is that it instantiates a default database account to connect with. We will further deconstruct the connection string.

`edgedb://` is the protocol that states what database we're connecting to.

`edgedb` is the user.

`localhost` is the IP address for the database. In production, we'd need to change this.

`saas_app` is the name of our database.

We can now work on the **/signup** endpoint. The signup endpoint requires that we take in the **email** and **passwordHash** and create a new user account if the email isn't already present. So we'll first check if the user is present.

```python
await conn.fetchone('''
    SELECT User {email} FILTER .email = <str>$email
    LIMIT 1
''', email=email)
```

What this method, `fetchone` does, is fetch one result from the query. The query is [EdgeQL](https://edgedb.com/docs/edgeql/overview), which is based off SQL. We select from our model `User` all objects with `email` where `email` matches the email we got from the request object.

If it matches, we want to send a different response, and close the db connection.

```python
try:
    await conn.fetchone('''
        SELECT User {email} FILTER .email = <str>$email
        LIMIT 1
    ''', email=email)
    resp.status_code = api.status_codes.HTTP_400
    resp.text = "400 Bad Request"
    await conn.close()
    return
except:
    await conn.fetchall('''
        INSERT User {
            email := <str>$email,
            passwordHash := <str>$passwordHash,
            active := <bool>$active
        }
    ''', email=email, passwordHash=passwordHash, active=True)

await conn.close()
resp.text = "Signup Complete!"
```

Otherwise, we can proceed with signup. This is done through `fetchall`, and an `INSERT` query. If all goes well, we proceed to close the db connection and return a Response object that will print out "Signup Complete!".

The **/login** endpoint is very similar to the **/signup** one. We keep the same try block, modifying it slightly.

```python
try:
    user = await conn.fetchone('''
        SELECT User {email, passwordHash} FILTER .email = <str>$email AND .passwordHash = <str>$passwordHash
        LIMIT 1
    ''', email=email, passwordHash=passwordHash)
    resp.text = "Login Successful"
except:
    resp.status_code = api.status_codes.HTTP_400
    resp.text = "Login Unsuccessful"
```

We check to see if `email` and `passwordHash` match, and return successful if so. Otherwise, we throw another 400 bad request. We can proceed to close the database connection.

## Testing

You now have an API endpoint connected to a database that is able to process signups and logins.

You now need to move towards testing this API endpoint. I find [Postman](https://www.getpostman.com) to be an ideal tool for this sort of testing. You can also use the terminal and curl, but Postman really just makes it so much easier.

You can create a POST request in Postman, and change the type of the body to be `xxx-form-encoded`. You can then include two keys, `email` and `passwordHash` and send out API requests in order to test whether your API is working. Remember to keep both the EdgeDB instance and responder server up when doing this.

## Conclusion

You did it! If you appreciate this sort of content or have any sort of questions, please give me a follow on [twitter](https://twitter.com/suchcaptcha).