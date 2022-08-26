import styles from "@/components/contact/contact.module.scss";
import Social from "../socials/Socials";

export default function Contact() {
	return (
		<div className={styles.stack}>
			<h3 className={styles.heading}>Contact</h3>
			{/* <Social /> */}
			<address>tmyk.engineer@gmail.com</address>
		</div>
	);
}
