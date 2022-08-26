import type { NextPage, InferGetStaticPropsType } from "next";
import Container from "~/components/container/Container";
import Hero from "@/components/hero/Hero";
import { client, getAllSlugs } from "@/lib/api";
import { Blog, Category } from "~/types/blog";
import Link from "next/link";
import Image from "next/image";

type Props = {
	blogs: Blog[];
	categories: Category[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
	blogs,
	categories,
}: Props) => {
	console.log(blogs);
	console.log(categories);

	return (
		<Container large={false}>
			<Hero title="BearDev" subtitle="ブログサイト" imageOn={true} />
			<div>
				{blogs.map((item) => {
					return (
						<li key={item.id}>
							<Link href={`/blog/${item.slug}`}>{item.title}</Link>
							{/* <Image src={item.eyecatch?.url} width={200} height={200} alt="" /> */}
						</li>
					);
				})}
			</div>
		</Container>
	);
};

export const getStaticProps = async () => {
	const blog = await client.get({ endpoint: "blogs" });
	const category = await client.get({ endpoint: "categories" });

	return {
		props: {
			blogs: blog.contents,
			categories: category.contents,
		},
	};
};

export default Home;
