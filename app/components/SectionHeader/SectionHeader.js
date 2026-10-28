import styles from "./SectionHeader.module.css";

export default function SectionHeader({ eyebrow, title, highlight, description }) {
  return (
    <div className={styles.wrap}>
      {eyebrow && (
        <span className={styles.pill}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={styles.title}>
        {title}
        {highlight && <span className={styles.highlight}>{highlight}</span>}
      </h2>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}