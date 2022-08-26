import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Socials } from "~/const/socials";
import styles from "@/components/socials/socials.module.scss";

type Props = {
	iconSize: any;
};

export default function Social() {
	return (
		<ul className={styles.list}>
			{Socials.map((item) => {
				return (
					<li key={item.id}>
						<a href={item.href}>
							<FontAwesomeIcon icon={item.icon} />
							<span className="sr-only">{item.title}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
