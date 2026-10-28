import { footerColumns, socials } from "../../data/footer";
import styles from "./Footer.module.css";
import SocialIcon from "../SocialIcon/SocialIcon";

const EMAIL = "sushilkumar76838@gmail.com";
const PHONE_DISPLAY = "+91 7683833447";
const PHONE_LINK = "+917683833447";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

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
            <a href={`mailto:${EMAIL}`} className={styles.contactItem}>
              <span className={styles.iconBox}>
                <MailIcon />
              </span>
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_LINK}`} className={styles.contactItem}>
              <span className={styles.iconBox}>
                <PhoneIcon />
              </span>
              {PHONE_DISPLAY}
            </a>
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
                  <SocialIcon name={s} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}