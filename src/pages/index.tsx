import type { NextPage } from "next";
import Hero from "~/components/Hero/Hero";
import Layout from "~/components/layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero title="BearDev" subtitle="ブログサイト" imageOn />
		</Layout>
	);
};

export default Home;
