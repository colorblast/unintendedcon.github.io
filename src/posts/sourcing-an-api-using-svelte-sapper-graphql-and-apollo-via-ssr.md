---
layout: post
title: Integrating Svelte (Sapper) with a GraphQL API using `apollo` via SSR 
date: 2020-07-26 16:28 -0400
description: >-
  - I source a graphql API using apollo with Svelte and Sapper and tell you how to do so.
keywords:
  - apollo
  - graphql
  - svelte
  - sapper
  - Error: Function called outside component initialization
---

## Term Explanation

Graphql has been gaining traction and hype since Facebook first released it in 2015. The main draw of it is that you can selectively request what sort of information you want based off what you need. This and the fact that REST is very boilerplate-ish has led to an increase in Graphql's popularity.

Svelte is a cool js library that provides app reactivity. The problem with any sort of large scale vanilla JS app is that users expect a certain level of interactiveness. They want that DOM element (say a graph) to be updated when that DOM element (a slider) is modified. This led Facebook to create React and the virtual DOM, where instead of dealing with tons of event listeners that are just all over the place, you would keep track of the state of the objects in the shadow DOM. Svelte differs from React in that it does maintain a shadow DOM in the browser, but rather compiles all your DOM elements (components) into js. This means svelte is more lightweight. For me, it also feels more intuitive.

Sapper is a SSR framework for Svelte. SSR means server-side rendered. The majority of how the web used to be is server-side rendered. If some computer on some server elsewhere is rendering some markup, then it's server-side rendered. React turned that on it's head since it's shadow DOM means that elements are client-side rendered (CSR). This means that your browser is the one to do the rendering of the website. This makes much more sense because it's much faster for the client to render it than to wait for some distant server to do so. It was impractical to do so before because of client resource constraints (much easier to have a higher-threshhold server farm), but the chip revolution and Moore's law has made it otherwise.
 
Why would we want SSR when CSR is faster? A large part of the Internet relies on traffic from search engines. People spend time on making their content rank higher on the algorithms used to determine what content goes where for search engines like Google. This practice is known as search engine optimization (SEO). Google's crawler does not view the DOM, but rather examines the source code of a given webpage. Since CSR is rendered in the client, there is nothing there in the code to give the robot any insight into what sort of content you have. For sites that are content-heavy and rely on search engine traffic, this is a no-go.

A framework like Sapper allows you to pick the best of both worlds where it will automatically render pages via CSR, but enables you to override it and render it via SSR. This means that for content like articles you can enable SSR whereas for content that is not important for SEO, such as an internal listing or a dashboard, you can ignore SSR.

## building it

You can get the sapper template using `degit`.

```shell
npx degit "sveltejs/sapper-template#rollup" my-app
cd my-app
yarn install
```

We're gonna need apollo in order to query. Apollo is broken into a bunch of packages that all need to be installed. We're going to go with the easy-set version.

```shell
yarn install apollo-boost
```

Apollo also depends on graphql.

```shell
yarn install graphql graphql-tag
```

We can now create an API in the `index.svelte` file in the routes folder. We're going to use the [Country API](https://countries.trevorblades.com/) provided by Trevor Blades. Since we're going the SSR route (although this content isn't neccesarily the type you'd use for SEO), we'll have to look at Sapper and how it handles data. Since Sapper is based off Next.js (the equivalent framework for React), we find that there is a similar function to Next.js's `getInitialProps`. If we create an async function [`preload`](https://sapper.svelte.dev/docs/#Preloading) we can preload data independent of whatever component or element the code is in. This means that the server will render whatever is inside of that function.

```svelte
<script context="module">
	import ApolloClient from 'apollo-boost'
	import gql from 'graphql-tag'
	export async function preload({
		params, 
		query
	}) {

		const client = new ApolloClient({
			uri: "https://countries.trevorblades.com/",
			fetch: this.fetch
		})

		const country = await client.query({
			query: gql`
				query {
					countries {
						code
						name
						capital
						currency
					}
				}
			`
		})

		return { 
			country
		}
	}
</script>
```

We do this by defining a script tag with the attribute module. We import Apollo Client to ping the endpoint and gql for the syntax for the actual query. We then return the value country as a prop to our component at the end.

To define country as a prop, we create another script tag right below it.

```svelte
<script>

	export let country;
</script>
```

We can now access the countries as a prop in the page. We'll loop through and destructure them.

```svelte
{#each country.data.countries as {name, code, capital}}
	<p><span class="text-xl">{name} </span><span class="text-lg">{capital != null ? capital : "None"}</span></p>
{/each}
```

That's it! If you run `yarn dev` you should find a list of countries and their capitals.