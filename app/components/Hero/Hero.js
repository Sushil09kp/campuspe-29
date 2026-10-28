import OptionCard from "../OptionCard/OptionCard";
import {
  WhatsAppIcon,
  BoltIcon,
  RobotIcon,
  SparkleIcon,
  BankIcon,
  CapIcon,
  BriefcaseIcon,
} from "../Icons/Icons";
import styles from "./Hero.module.css";

const cards = [
  {
    icon: <BankIcon />,
    badge: "Coming Soon",
    title: "College",
    description: "Explore colleges, courses, fees, placements & more",
    features: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    cta: "Join Waitlist",
    ctaIcon: "bell",
    href: "#get-started",
  },
  {
    icon: <CapIcon />,
    badge: "Available Now",
    available: true,
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    cta: "Explore Jobs",
    ctaIcon: "arrow",
    href: "#jobs",
  },
  {
    icon: <BriefcaseIcon />,
    badge: "Coming Soon",
    title: "I'm Hiring",
    description:
      "Connect with colleges and find candidates — from students to graduates.",
    features: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    cta: "Join Waitlist",
    ctaIcon: "bell",
    href: "#get-started",
  },
];

function Floating({ className, children }) {
  return (
    <div className={`${styles.float} ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.top}`}>
        <Floating className={styles.whatsapp}>
          <div className={styles.fHead}>
            <WhatsAppIcon size={16} />
            <strong className={styles.orange}>WhatsApp Alert</strong>
          </div>
          <span>Get notified on WhatsApp</span>
          <small>You&apos;ll get all important updates on your WhatsApp</small>
        </Floating>

        <Floating className={styles.resume}>
          <div className={styles.fHead}>
            <span className={styles.purple}>
              <BoltIcon size={16} />
            </span>
            <strong className={styles.purple}>Resume Builder</strong>
          </div>
          <span>Build Your Resume</span>
          <small>
            Our resume builder gives you dynamic options to build better and
            faster resumes that get you hired
          </small>
        </Floating>

        <Floating className={`${styles.matched} ${styles.row}`}>
          <div className={styles.avatars}>
            <i style={{ background: "#4f6df5" }}>AK</i>
            <i style={{ background: "#6d4cd6" }}>PR</i>
            <i style={{ background: "#3fb0c4" }}>SN</i>
          </div>
          <div className={styles.col}>
            <span>
              <b className={styles.dot} /> 🔥 142 students matched today
            </span>
            <small>Just now • IIT, BITS, VIT</small>
          </div>
        </Floating>

        <Floating className={`${styles.shortlisted} ${styles.row}`}>
          <span className={styles.thumb}>
            <BriefcaseIcon size={16} />
          </span>
          <div className={styles.col}>
            <span>
              <strong className={styles.blue}>Radiant Info</strong> shortlisted
              8 interns
            </span>
            <small className={styles.green}>
              ● Verified recruiter • 2 days ago
            </small>
          </div>
        </Floating>

        <div className={styles.center}>
          <span className={styles.pill}>
            <RobotIcon size={16} /> AI-Powered Campus Assistant
          </span>
          <h1 className={styles.heading}>
            Connect <span className={styles.gradient}>10X Faster.</span>
          </h1>
          <p className={styles.sub}>
            One platform connecting students, colleges &amp; employers — faster.
          </p>
          <p className={styles.ask}>
            <SparkleIcon size={18} />
            <span>What are you looking for?</span>
            <SparkleIcon size={18} />
          </p>
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