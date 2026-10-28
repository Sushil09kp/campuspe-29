import styles from "./Partners.module.css";

const partners = [
  "GINSERV",
  "STARTUP KARNATAKA",
  "TALENTSPOTIFY",
  "RADIANT INFO",
  "DIGITAL INDIA",
];

export default function Partners() {
  return (
    <section className={styles.partners} aria-label="Our partners">
      <p className={styles.title}>Trusted by partners across India</p>

      <div className={styles.marquee}>
        <ul className={styles.track}>
          {[...partners, ...partners].map((name, i) => (
            <li
              key={`${name}-${i}`}
              className={styles.logo}
              aria-hidden={i >= partners.length}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}