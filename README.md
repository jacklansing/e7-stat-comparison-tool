# E7 Stat Comparison Tool

Quick proof of concept for a hero comparison tool.

All values are based on a completely awakened and max level hero.

The main benefit/idea behind this tool is a quick comparison of speed, however other stats have been included as well.

Many thanks to the api hosted by [https://epicsevendb.com/](https://epicsevendb.com/) for making this data available for everyone to use.

## About

Build with [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/) and taking advantage of `gatsby-transformer-json`, this app stores _only_ the data it needs to run as a static JSON file.

That data is then added to the [graphql](https://www.gatsbyjs.org/docs/graphql-concepts/) layer of Gatsby via `gatsby-source-filesystem` and is accessed via the `useStaticQuery` hook.

What this means for us is a super responsive filter & comparison tool that doesn't force us to hammer the E7 API making multiple calls for heroes, or making calls for data we don't need/use.
