import Link from "next/link";
import { Navigation } from "@/const/navigation";

export default function TheNavigation() {
	return (
		<nav>
			<ul>
				<li>
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
