"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const links = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="CampusPe home">
          Campus<span>Pe</span>
        </Link>

        <nav
          id="main-nav"
          className={`${styles.nav} ${open ? styles.open : ""}`}
          aria-label="Main"
        >
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href="#get-started"
              className={styles.signin}
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
            <Button href="#get-started" size="sm" onClick={() => setOpen(false)}>
              Sign Up
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}