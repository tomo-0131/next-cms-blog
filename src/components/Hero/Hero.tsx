import styles from "@/components/Hero/hero.module.scss";

interface Props {
	title: string;
	subtitle: string;
	imageOn: boolean;
}

export default function Hero({ title, subtitle, imageOn = false }: Props) {
	return (
		<main>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>
				{imageOn && <figure> [画像] </figure>}
			</div>
		</main>
	);
}
