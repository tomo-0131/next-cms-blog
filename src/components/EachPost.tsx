interface Props {
	title: string;
	url: string;
}

function EachPost({ title, url }: Props) {
	return (
		<article>
			<a href={url}>
				<h3>{title}</h3>
			</a>
		</article>
	);
}

export default EachPost;
