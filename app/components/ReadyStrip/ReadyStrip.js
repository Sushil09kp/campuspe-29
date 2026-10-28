import Button from "../Button/Button";
import styles from "./ReadyStrip.module.css";

export default function ReadyStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.strip}>
          <div className={styles.text}>
            <h2>Ready for what&apos;s next?</h2>
            <p>
              Discover colleges, find opportunities, list your institution, or
              start hiring with CampusPe.
            </p>
          </div>
          <div className={styles.actions}>
            <Button href="#colleges" size="sm">Explore Colleges →</Button>
            <Button href="#jobs" size="sm">Find Opportunities →</Button>
            <Button href="#colleges" variant="outline" size="sm">List Your College →</Button>
            <Button href="#employers" variant="outline" size="sm">Post a Job →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}