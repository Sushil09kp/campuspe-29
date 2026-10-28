import styles from "./Stats.module.css";

const stats = [
  { icon: "👥", value: "800+", label: "Students" },
  { icon: "🏛️", value: "130+", label: "colleges" },
  { icon: "💼", value: "100+", label: "jobs & internships" },
  { icon: "🛡️", value: "100%", label: "Safe & Trusted" },
];

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="CampusPe in numbers">
      <div className={`container ${styles.row}`}>
        {stats.map((item) => (
          <div key={item.label} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <strong className={styles.value}>{item.value}</strong>
              <span className={styles.label}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}