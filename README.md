# astro-headless-wp-example

An example of an Astro site with a super simple connection to a local WordPress site using GraphQL.

### Requirements
- `npm` or `yarn` to install Astro dependencies
- A local WordPress site

### Note

For Windows/WSL2 users: if your local WordPress site runs on Windows and your Astro dev server on WSL2 then you might need to do one of the following:

- Enable [Mirrored mode networking](https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking) by adding the following line `networkingMode=mirrored` to your `.wslconfig` file.

Or

- Follow the instructions on [Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/networking) to use the Windows host IP.

## Instructions

### Setup WordPress

1. Create a new local WordPress site, or use an existing one.
2. Install the [WPGraphQL plug-in](https://wordpress.org/plugins/wp-graphql/) and activate it.

### Setup Astro

1. Clone this repository
2. Create a `.env` file in the project root
3. Add to this `WP_URL=(yourWordpressUrlHere)/graphql` including `http://` or `https://`

### Setup Queries

1. Use by importing at the top of your component/page: `import { wpquery } from '../graphql/wpQuery';`
2. Then you can use the `wpquery` function to fetch data from your local WordPress site:
```js
const data = await wpquery({
    query: `
        (YOUR QUERY HERE)
    `,
});
```
> **Tip:** You can use the Query Composer in the GraphiQL IDE on your WordPress site to quickly create queries and preview their output.
> 
> It can be accessed by clicking on the GraphQL > GraphiQL IDE on the left-hand sidebar in the WordPress dashboard, or going to this URL `/wp-admin/admin.php?page=graphiql-ide`.
