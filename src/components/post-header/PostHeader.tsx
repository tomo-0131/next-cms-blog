import styles from "@/components/post-header/post-header.module.scss";
import { Blog } from "@/types/blog";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConvertDate from "~/lib/convert-date";
export default function PostHeader({ subtitle, title, publishDate }: Blog) {
	return (
		<div className={styles.stack}>
			<p className={styles.subtitle}>{subtitle}</p>
			<h1 className={styles.title}>{title}</h1>
			{publishDate && (
				<div className={styles.publish}>
					<FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
					<ConvertDate dateISO={publishDate} />
				</div>
			)}
		</div>
	);
}
