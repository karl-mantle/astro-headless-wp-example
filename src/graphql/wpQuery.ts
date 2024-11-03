interface gqlParams {
	query: String;
	variables?: object;
}

export async function wpquery({ query, variables = {} }: gqlParams) {
	// create .env with WP_URL=yourSiteUrl/graphql
	const res = await fetch(import.meta.env.WP_URL, {
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