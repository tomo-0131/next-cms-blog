import Container from "~/components/container/Container";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import { useEffect } from "react";
import { getAllSlugs } from "~/lib/api";

export default function Blog() {
	return (
		<Container large={false}>
			<Meta pageTitle="Blog" pageDesc="Blogの記事一覧" />
			<Hero title="Blog" subtitle="Recent Posts" imageOn={false} />
		</Container>
	);
}
