"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import styles from "./OpportunityDiscovery.module.css";

const steps = [
  { no: "01", title: "Set your preferences", tag: "Smart Profile", text: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs." },
  { no: "02", title: "Discover relevant opportunities", tag: "AI Ranked", text: "Explore colleges and career opportunities matched to your profile, interests and goals." },
  { no: "03", title: "Get notified when something fits", tag: "Instant Alerts", text: "Get notified when a relevant college or new opportunity is found, so you can act early." },
];

const filters = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

const items = [
  {
    icon: "🏛️",
    title: "IIM Bangalore",
    badge: "Top College",
    meta: ["MBA", "Bengaluru", "₹3L+"],
    text: "India's premier management institute with global exposure.",
    cta: "View Details",
    tags: ["Colleges"],
  },
  {
    icon: "G",
    title: "Product Intern",
    badge: "Internship",
    meta: ["Bengaluru", "Hybrid", "₹35K/mo"],
    text: "Work on real products, learn from top engineers and build.",
    cta: "Apply Now",
    tags: ["Jobs", "Internships"],
  },
  {
    icon: "📣",
    title: "Marketing Gig",
    badge: "Freelance",
    meta: ["Remote", "Freelance", "₹10K - ₹25K"],
    text: "Create content and help with social media campaigns for brands.",
    cta: "View Details",
    tags: ["Freelance", "Part-time"],
  },
];

export default function OpportunityDiscovery() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? items : items.filter((item) => item.tags.includes(active));

  return (
    <section id="jobs" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="01 • Opportunity Discovery"
            title="Stop searching."
            highlight="Start getting matched."
            description="Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear."
          />

          <ul className={styles.steps}>
            {steps.map((step) => (
              <li key={step.no} className={styles.step}>
                <span className={styles.stepNo}>{step.no}</span>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className={styles.stepTag}>{step.tag}</span>
              </li>
            ))}
          </ul>

          <Button href="#get-started" size="md">
            Explore opportunities →
          </Button>
        </div>

        <div className={styles.right}>
          <div className={styles.feed}>
            <div className={styles.feedHead}>
              <div>
                <h3>CampusPe Opportunity Feed</h3>
                <p>Colleges &amp; opportunities matched to you</p>
              </div>
              <span className={styles.live}>12 new matches today</span>
            </div>

            <div className={styles.chips} role="group" aria-label="Filter opportunities">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`${styles.chip} ${active === f ? styles.chipActive : ""}`}
                  aria-pressed={active === f}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className={styles.rows}>
              {visible.length === 0 && (
                <p className={styles.empty}>No matches in this category yet.</p>
              )}
              {visible.map((item) => (
                <article key={item.title} className={styles.row}>
                  <span className={styles.rowIcon} aria-hidden="true">{item.icon}</span>
                  <div className={styles.rowBody}>
                    <div className={styles.rowTop}>
                      <h4>{item.title}</h4>
                      <span className={styles.badge}>{item.badge}</span>
                    </div>
                    <p className={styles.meta}>{item.meta.join("  •  ")}</p>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                  <button type="button" className={styles.rowBtn}>{item.cta}</button>
                </article>
              ))}
            </div>

            <div className={styles.feedFoot}>
              <a href="#get-started">View all matched opportunities →</a>
              <span>Curated for you • Updated daily</span>
            </div>
          </div>

          <p className={styles.caption}>
            A mix of colleges, jobs, internships and gigs, all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}