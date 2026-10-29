"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./AuthModal.module.css";

export default function AuthModal({ mode, onClose, onSuccess, onSwitch }) {
  const isSignUp = mode === "signup";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function handleSubmit(e) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (isSignUp && cleanName.length < 2) {
      setError("Please enter your name (at least 2 letters).");
      return;
    }
    if (!cleanEmail.includes("@") || !cleanEmail.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const userName = isSignUp ? cleanName : cleanEmail.split("@")[0];
    onSuccess({ name: userName, email: cleanEmail });
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 id="auth-title" className={styles.title}>
          {isSignUp ? "Register on CampusPe" : "Welcome back"}
        </h2>
        <p className={styles.sub}>
          {isSignUp
            ? "Join CampusPe and find jobs faster."
            : "Sign in to continue to CampusPe."}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {isSignUp && (
            <div className={styles.field}>
              <label htmlFor="auth-name">Full name</label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                autoFocus
              />
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus={!isSignUp}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isSignUp ? "new-password" : "current-password"}
            />
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <div className={styles.submit}>
            <Button type="submit" size="lg">
                {isSignUp ? "Register" : "Sign In"}
            </Button>
          </div>
        </form>

        <p className={styles.switch}>
          {isSignUp ? "Already have an account?" : "New to CampusPe?"}{" "}
          <button
            type="button"
            onClick={() => onSwitch(isSignUp ? "signin" : "signup")}
          >
            {isSignUp ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}