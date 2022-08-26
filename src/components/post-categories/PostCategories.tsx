import Link from "next/link";
import { Category } from "~/types/blog";

interface Props {
	categories: Category[] | undefined;
}

export default function PostCategories({ categories }: Props) {
	return (
		<ul>
			{categories?.map(({ name, slug }) => (
				<li key={slug}>
					<Link href={`/blog/category/${slug}`}>
						<a>{name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
