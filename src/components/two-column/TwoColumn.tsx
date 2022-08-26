import { ReactNode } from "react";
import styles from "@/components/two-column/two-column.module.scss";

type Props = {
	children: ReactNode;
};

export function TwoColumn({ children }: Props) {
	return <div className={styles.flexContainer}>{children}</div>;
}

export function TwoColumnMain({ children }: Props) {
	return <div className={styles.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }: Props) {
	return <div className={styles.side}>{children}</div>;
}
