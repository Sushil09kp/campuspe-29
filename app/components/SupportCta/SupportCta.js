import Button from "../Button/Button";
import styles from "./SupportCta.module.css";

export default function SupportCta() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <h2>Still have questions?</h2>
          <p>
            Our support team is here to help you succeed. Get in touch anytime.
          </p>
          <div className={styles.actions}>
            <Button href="mailto:sushilkumar76838@gmail.com" size="md">
              Contact Support ↗
            </Button>
            <Button href="tel:+917683833447" variant="outline" size="md">
              Schedule a Call 📞
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}