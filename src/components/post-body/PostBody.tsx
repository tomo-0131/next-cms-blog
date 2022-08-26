import { ReactNode } from "react";
import styles from "@/components/post-body/post-body.module.scss";

type Props = {
	children: ReactNode;
};

export default function PostBody({ children }: Props) {
	return <div className={styles.stack}>{children}</div>;
}
