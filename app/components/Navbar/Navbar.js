"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import AuthModal from "../AuthModal/AuthModal";
import styles from "./Navbar.module.css";

const STORAGE_KEY = "campuspe_user";

const links = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [user, setUser] = useState(null); // logged in user or null
  const [modal, setModal] = useState(null); // "signin", "signup" or null

  // When the page loads, check if a user was saved earlier
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  function openModal(mode) {
    setModal(mode);
    setOpen(false);
  }

  function handleSuccess(newUser) {
    setUser(newUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } catch (error) {
      console.log(error);
    }
    setModal(null);
  }

  function handleSignOut() {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  }

  return (
    <>
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
              {user ? (
                <>
                  <span className={styles.hello}>Hi, {user.name}</span>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className={styles.signin}
                    onClick={() => openModal("signin")}
                  >
                    Sign In
                  </button>
                  <Button size="sm" onClick={() => openModal("signup")}>
                    Register
                  </Button>
                </>
              )}
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

      {modal && (
        <AuthModal
          key={modal}
          mode={modal}
          onClose={() => setModal(null)}
          onSuccess={handleSuccess}
          onSwitch={setModal}
        />
      )}
    </>
  );
}