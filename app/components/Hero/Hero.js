import OptionCard from "../OptionCard/OptionCard";
import styles from "./Hero.module.css";

const cards = [
  {
    icon: "🏛️",
    badge: "Coming Soon",
    title: "College",
    description: "Explore colleges, courses, fees, placements & more",
    features: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    cta: "Join Waitlist",
    href: "#get-started",
  },
  {
    icon: "🎓",
    badge: "Available Now",
    available: true,
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    cta: "Explore Jobs →",
    href: "#jobs",
  },
  {
    icon: "💼",
    badge: "Coming Soon",
    title: "I'm Hiring",
    description:
      "Connect with colleges and find candidates, from students to graduates.",
    features: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    cta: "Join Waitlist",
    href: "#get-started",
  },
];

function Floating({ className, title, text, sub }) {
  return (
    <div className={`${styles.float} ${className}`} aria-hidden="true">
      <strong>{title}</strong>
      {text && <span>{text}</span>}
      {sub && <small>{sub}</small>}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.top}`}>
        <Floating
          className={styles.whatsapp}
          title="WhatsApp Alert"
          text="Get notified on WhatsApp"
          sub={"You'll get all important updates on WhatsApp"}
        />
        <Floating
          className={styles.resume}
          title="Resume Builder"
          text="Build Your Resume"
          sub="Build a better and faster resume that gets you hired"
        />
        <Floating
          className={styles.matched}
          title="142 students matched today"
          sub="Just now • IIT, BITS, VIT"
        />
        <Floating
          className={styles.shortlisted}
          title="Radiant Info shortlisted 8 interns"
          sub="Verified recruiter • 2 days ago"
        />

        <div className={styles.center}>
          <span className={styles.pill}>✦ AI-Powered Campus Assistant</span>
          <h1 className={styles.heading}>
            Connect <span className={styles.gradient}>10x Faster.</span>
          </h1>
          <p className={styles.sub}>
            One platform connecting students, colleges & employers, faster.
          </p>
          <p className={styles.ask}>✦ What are you looking for? ✦</p>
        </div>
      </div>

      <div className={`container ${styles.cards}`}>
        {cards.map((card) => (
          <OptionCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}