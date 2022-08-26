import TheNavigation from "~/components/layouts/navigation/TheNavigation";
import Logo from "@/components/layouts/logo/Logo";
import styles from "@/components/layouts/header/header.module.scss";
import Container from "@/components/container/Container";

export default function TheHeader() {
	return (
		<header>
			<Container large>
				<div className={styles.flexContainer}>
					<Logo boxOn={true} />
					<TheNavigation />
				</div>
			</Container>
		</header>
	);
}
