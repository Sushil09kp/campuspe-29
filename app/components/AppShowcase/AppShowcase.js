"use client";

import { useState } from "react";
import PhoneMock from "../PhoneMock/PhoneMock";
import styles from "./AppShowcase.module.css";

const screens = [
  { title: "Hi, Amit Kumar", lines: 3 },
  { title: "Post a Job", lines: 5 },
  { title: "Discover", lines: 4 },
  { title: "My Application", lines: 5 },
  { title: "XYZ College", lines: 3 },
];

export default function AppShowcase() {
  const [active, setActive] = useState(2);

  return (
    <section className={styles.section} aria-labelledby="app-heading">
      <div className="container">
        <h2 id="app-heading" className={styles.title}>
          Check Out Our App Interface Look
        </h2>
        <p className={styles.desc}>
          Experience the power of a unified campus ecosystem right in your
          pocket. <strong>CampusPe</strong> offers a tailored interface for
          every user: students can explore trending courses, colleges can
          showcase their campus life, and companies can post job vacancies
          directly to a pool of qualified candidates.
        </p>

        <div className={styles.phones}>
          {screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`${styles.slot} ${active === i ? styles.slotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.title} screen`}
              aria-pressed={active === i}
            >
              <PhoneMock title={s.title} lines={s.lines} featured={active === i} />
            </button>
          ))}
        </div>

        <div className={styles.dots} role="group" aria-label="Choose screen">
          {screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${s.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}