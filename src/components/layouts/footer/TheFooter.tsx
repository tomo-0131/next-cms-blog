import Logo from "@/components/layouts/logo/Logo";
import styles from "@/components/layouts/footer/footer.module.scss";
import Container from "@/components/container/Container";
import Socials from "@/components/socials/Socials";

export default function TheFooter() {
	return (
		<footer className={styles.wrapper}>
			<Container large={false}>
				<div className={styles.flexContainer}>
					<Logo boxOn={false} />
					<Socials />
				</div>
			</Container>
		</footer>
	);
}
