import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `http://127.0.0.1:8055/`, // Fill with your Directus instance address
				auth: {
					token: 'cg2AR1p5HDcthtx-bnACVAKd4FoH5b8l', // You can use a static token from an user

					// Or you can use the credentials of an user
					// email: "admin@example.com",
					// password: "d1r3ctu5",
				},
			},
		}
  ],
}

export default config
