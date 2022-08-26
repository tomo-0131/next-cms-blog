import styles from "@/components/hero/hero.module.scss";
import Image from "next/image";
import styled from "styled-components";
import hero from "@/static/hero.jpg";
import Meta from "@/components/meta/Meta";

interface Props {
	title: string;
	subtitle: string;
	imageOn: boolean;
}

const Text = styled.div`
	padding-top: calc(var(--display) * 0.5);
	padding-bottom: calc(var(--display) * 0.7);
`;

const Title = styled.h1`
	font-size: var(--display);
	font-weight: 900;
	letter-spacing: 0.15em;
`;

const SubTitle = styled.p`
	font-size: var(--small-heading2);
`;

export default function Hero({ title, subtitle, imageOn = true }: Props) {
	return (
		<>
			<Meta
				pageTitle="Home"
				pageDesc="トップページです"
				pageImg={hero.src}
				pageImgW={hero.width}
				pageImgH={hero.height}
			/>
			<main>
				<div className={styles.flexContainer}>
					<Text>
						<Title>{title}</Title>
						<SubTitle>{subtitle}</SubTitle>
					</Text>
					{imageOn && (
						<figure className={styles.image}>
							<Image
								src={hero}
								layout="responsive"
								sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw,100vw"
								alt=""
								priority
								placeholder="blur"
							/>
						</figure>
					)}
				</div>
			</main>
		</>
	);
}
