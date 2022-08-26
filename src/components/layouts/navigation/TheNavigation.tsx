import Link from "next/link";
import { Navigation } from "@/const/navigation";
import styles from "@/components/layouts/navigation/navigation.module.scss";

export default function TheNavigation() {
	return (
		<nav>
			<ul>
				<li className={styles.list}>
					{Navigation.map((item) => {
						return (
							<Link href={item.href} key={item.id}>
								{item.title}
							</Link>
						);
					})}
				</li>
			</ul>
		</nav>
	);
}
