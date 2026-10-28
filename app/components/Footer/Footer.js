import { footerColumns, socials } from "../../data/footer";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label="CampusPe home">
              CampusPe
            </a>
            <p>From choosing a college to finding your next opportunity.</p>
            <p>CampusPe connects students, colleges and employers in one place.</p>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            {footerColumns.map((col) => (
              <div key={col.title} className={styles.col}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactLinks}>
            <a href="mailto:contactus@campuspe.com">contactus@campuspe.com</a>
            <a href="tel:+916362606464">+91 6362606464</a>
          </div>
          <span className={styles.tagline}>Students · Colleges · Employers</span>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 CampusPe Technologies Pvt. Ltd. <a href="#get-started">Privacy</a>{" "}
            <a href="#get-started">Terms</a> <a href="#get-started">Grievance</a>
          </p>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s}>
                <a href="#get-started" aria-label={s}>
                  {s.charAt(0)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}