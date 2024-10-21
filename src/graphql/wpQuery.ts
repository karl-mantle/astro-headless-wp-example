interface gqlParams {
	query: String;
	variables?: object;
}

export async function wpquery({ query, variables = {} }: gqlParams) {
	// change this URL to your local Wordpress domain/graphql
	const res = await fetch('http://wpgraphql-blog-test.local/graphql', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",

		},

		body: JSON.stringify({
			query,
			variables,
		}),
	});

	if (!res.ok) {
		console.error(res);
		return {};
	}

	const { data } = await res.json();
	return data;
}