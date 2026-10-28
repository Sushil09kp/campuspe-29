import styles from "./PhoneMock.module.css";

export default function PhoneMock({ title, lines = 3, featured = false }) {
  return (
    <div className={`${styles.phone} ${featured ? styles.featured : ""}`} aria-hidden="true">
      <div className={styles.notch} />
      <div className={styles.screen}>
        <p className={styles.hello}>{title}</p>
        <div className={styles.banner} />
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={styles.line} />
        ))}
        <div className={styles.cta} />
      </div>
    </div>
  );
}