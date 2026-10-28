import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  meta,
  title,
  highlight,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? styles.center : "";

  return (
    <div className={`${styles.wrap} ${alignClass}`}>
      {eyebrow && (
        <span className={styles.pill}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
          {meta && <span className={styles.meta}>{meta}</span>}
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