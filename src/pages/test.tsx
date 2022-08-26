import { GetStaticProps } from "next";

export default function Test({ props }: any) {
	return <div></div>;
}

export async function getServerSideProps(context) {
	console.log(context);

	return {
		props: {
			message: "データの流れ",
		},
	};
}
