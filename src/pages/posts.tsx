import EachPost from "@/components/EachPost";

export default function Posts() {
	const props = { title: "スケジュール管理と猫の理論", url: "/post/schedule" };

	return (
		<section>
			<h2>おすすめ記事</h2>
			<EachPost {...props} />
		</section>
	);
}
