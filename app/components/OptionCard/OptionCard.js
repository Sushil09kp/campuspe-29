import Button from "../Button/Button";
import styles from "./OptionCard.module.css";

export default function OptionCard({
  icon,
  badge,
  available = false,
  title,
  description,
  features,
  cta,
  href,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span className={`${styles.badge} ${available ? styles.live : ""}`}>
          {badge}
        </span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>

      <ul className={styles.list}>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Button href={href}>{cta}</Button>
      </div>
    </article>
  );
}