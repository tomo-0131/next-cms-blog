import Image from "next/image";
import Container from "~/components/container/Container";
import PostBody from "~/components/post-body/PostBody";
import PostHeader from "~/components/post-header/PostHeader";
import ConvertBody from "@/lib/convert-body";

import {
	TwoColumn,
	TwoColumnMain,
	TwoColumnSidebar,
} from "~/components/two-column/TwoColumn";
import { getAllSlugs, getPostBySlug } from "~/lib/api";
import { Blog } from "~/types/blog";
import PostCategories from "~/components/post-categories/PostCategories";
import { prevNextPost } from "~/lib/prev-next-post";
import Link from "next/link";

export default function Schedule({
	title,
	publishDate,
	content,
	eyecatch,
	categories,
	prevPost,
	nextPost,
}: Blog) {
	console.log(categories);

	return (
		<Container>
			<article>
				<PostHeader
					title={title}
					subtitle="Blog article"
					publishDate={publishDate}
				/>

				<figure>
					<Image
						priority
						src={eyecatch?.url!}
						alt=""
						layout="responsive"
						width={eyecatch?.width}
						height={eyecatch?.height}
					/>
				</figure>

				<TwoColumn>
					<TwoColumnMain>
						<PostBody>
							<ConvertBody contentHTML={content} />
						</PostBody>
					</TwoColumnMain>
					<TwoColumnSidebar>
						<PostCategories categories={categories} />
					</TwoColumnSidebar>
				</TwoColumn>
				<div>
					<Link href={`/blog/${prevPost?.slug}`}>{prevPost?.title}</Link>
					<br />
					<Link href={`/blog/${nextPost?.slug}`}>{nextPost?.title}</Link>
				</div>
			</article>
		</Container>
	);
}

// type Params = {
// 	context: {
// 		params: {
// 			slug: string;
// 		};
// 	};
// };

export const getStaticPaths = async () => {
	const allSlugs = await getAllSlugs();

	return {
		paths: allSlugs.map(({ slug }: any) => `/blog/${slug}`),
		fallback: true,
	};
};

export const getStaticProps = async (context: any) => {
	const slug = context.params.slug;

	const post = await getPostBySlug(slug);

	// console.log(`building slugs: ${slug}`);

	const allSlugs = await getAllSlugs();
	const [prevPost, nextPost] = await prevNextPost(allSlugs, slug);

	return {
		props: {
			title: post.title,
			slug: post.slug,
			publishDate: post.publishDate,
			content: post.content,
			eyecatch: post.eyecatch,
			categories: post.categories,
			prevPost: prevPost,
			nextPost: nextPost,
		},
	};
};
