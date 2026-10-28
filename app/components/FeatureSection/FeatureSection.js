import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import styles from "./FeatureSection.module.css";

export default function FeatureSection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  cta,
  rows,
  tinted = false,
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tinted ? styles.tinted : ""}`}
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
          />
          <Button href={cta.href} size="md">
            {cta.label}
          </Button>
        </div>

        <ul className={styles.rows}>
          {rows.map((row) => (
            <li key={row.no} className={styles.row}>
              <div className={styles.body}>
                <div className={styles.top}>
                  <span className={styles.no}>{row.no}</span>
                  <span className={styles.label}>{row.label}</span>
                </div>
                <h3>{row.title}</h3>
                <p>{row.text}</p>
              </div>

              <div className={styles.badges}>
                {row.badges.map((b) => (
                  <span
                    key={b.text}
                    className={`${styles.badge} ${styles[b.tone]}`}
                  >
                    {b.text}
                  </span>
                ))}
                {row.note && <small>{row.note}</small>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}