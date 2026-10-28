import { Lora } from "next/font/google";
import Button from "../Button/Button";
import { BellIcon, ArrowIcon } from "../Icons/Icons";
import styles from "./OptionCard.module.css";

const lora = Lora({ subsets: ["latin"], weight: ["600"], display: "swap" });

export default function OptionCard({
  icon,
  badge,
  available = false,
  title,
  description,
  features,
  cta,
  ctaIcon,
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

      <h3 className={`${styles.title} ${lora.className}`}>{title}</h3>
      <p className={styles.desc}>{description}</p>

      <ul className={styles.list}>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Button href={href}>
          <span className={styles.ctaInner}>
            {cta}
            {ctaIcon === "bell" && <BellIcon />}
            {ctaIcon === "arrow" && <ArrowIcon />}
          </span>
        </Button>
      </div>
    </article>
  );
}