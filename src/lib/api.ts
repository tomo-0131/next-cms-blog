import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.SERVICE_DOMAIN || "",
	apiKey: process.env.API_KEY || "",
});

export const getPostBySlug = async (slug: string) => {
	try {
		const post = await client.get({
			endpoint: "blogs",
			queries: { filters: `slug[equals]${slug}` },
		});

		return post.contents[0];
	} catch (e) {
		console.log(e);
	}
};

export const getAllSlugs = async (limit = 100) => {
	try {
		const slugs = await client.get({
			endpoint: "blogs",
			queries: { fields: "slug,title", orders: "-publishDate", limit: limit },
		});
		console.log(slugs);

		return slugs.contents;
	} catch (e) {
		console.log(e);
	}
};
