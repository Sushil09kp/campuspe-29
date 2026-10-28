import PhoneMock from "../PhoneMock/PhoneMock";
import styles from "./DownloadApp.module.css";

export default function DownloadApp() {
  return (
    <section id="download" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2>Download App Now</h2>
          <p>
            Elevate your academic journey with CampusPe, the all-in-one digital
            ecosystem designed to bridge the gap between education and
            industry. Whether you&apos;re a student seeking your next big
            internship, a college looking to empower your cohort, or a company
            scouting for top-tier talent, CampusPe streamlines the connection.
            Your career doesn&apos;t start at graduation, it starts here.
          </p>

          <div className={styles.stores}>
            <a href="#get-started" className={styles.store}>
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </a>
            <a href="#get-started" className={styles.store}>
              <small>Download on the</small>
              <strong>App Store</strong>
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.tiltBack}>
            <PhoneMock title="Hi, Rahul" lines={4} />
          </div>
          <div className={styles.tiltFront}>
            <PhoneMock title="Discover" lines={5} />
          </div>
        </div>
      </div>
    </section>
  );
}