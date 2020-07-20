---
layout: post
title: Setting up code highlighting with Prism.js and transformer-remark on Gatsby
date: 2020-07-19T21:37:00Z
description: Set up one and done code highlighting in under 10 minutes with Prism.js.
keywords:
  - javascript
  - prismjs
  - code highlighting
  - development
---

The first matter at hand is the installation of the required libraries. Since we're setting up code highlighting, we have a couple of options. There's [highlight.js](https://highlightjs.org/), [rainbow](https://github.com/ccampbell/rainbow), and [prism](https://prismjs.com/). We're going to be using prism because someone's already created a [gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) for it that interfaces with transformer-remark.

We first need to install the required libraries.

```bash
yarn add gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

Once we've got these libraries installed, we'll need to update our `gatsby-config.js` file.

```javascript
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-prismjs`,
    ]
  }
},
{
  resolve: `gatsby-remark-prismjs`,
  options: {
    classPrefix: "language-",
    inlineCodeMarker: null,
    aliases: {},
    showLineNumbers: false,
    noInlineHighlight: false,
  }
},
```

This config tells gatsby-transformer-remark that it has the prismjs plugin. The `classPrefix` option enables gatsby-remark-prismjs to be language-agnostic. We can now import prism.

```javascript
import "prismjs"
import "prismjs/components/prism-python"
import "prismjs/components/prism-bash"
```

By default, prism comes with javascript, c-like, markdown, svg, and rss. We can import various language packs as we need them from the components folder. We can now add the stylesheet to achieve code highlighting. I recommend this excellent [syntax theme generator](https://k88hudson.github.io/syntax-highlighting-theme-generator/www/). Once you have a stylesheet picked, download it, and throw it into a folder. It can be static, it can be a dedicated css folder; it doesn't really matter. You can now import it.

```javascript
import '../prism/prism-theme.css'
```

And you're set!
