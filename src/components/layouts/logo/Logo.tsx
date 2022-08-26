import Link from "next/link";
import styles from "@/components/layouts/logo/logo.module.scss";

type Props = {
	boxOn: boolean;
};

export default function Logo({ boxOn = false }: Props) {
	return (
		<Link href="/">
			<a href="" className={boxOn ? styles.box : styles.basic}>
				BearDev
			</a>
		</Link>
	);
}
