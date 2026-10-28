"use client";

import { useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ResumeUpload.module.css";

const MAX_SIZE = 10 * 1024 * 1024; 
const ALLOWED = ["pdf", "doc", "docx"];

const checks = [
  { title: "Resume analyzed", note: "Ready in 4s" },
  { title: "Skills matched", note: "Deep taxonomy" },
  { title: "Experience matched", note: "Contextual seniority" },
  { title: "1,000+ sources searched", note: "Real-time aggregators" },
];

function validate(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (!ALLOWED.includes(ext)) {
    return "Only PDF, DOC or DOCX files are allowed.";
  }
  if (file.size > MAX_SIZE) {
    return "File is too large. Maximum size is 10MB.";
  }
  return "";
}

export default function ResumeUpload() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(selected) {
    if (!selected) return;
    const problem = validate(selected);
    if (problem) {
      setFile(null);
      setError(problem);
      return;
    }
    setError("");
    setFile(selected);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }

  function handleRemove() {
    setFile(null);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <section id="try-it-live" className={styles.section}>
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Try it live"
          meta="v2.4 AI Engine"
          title="Upload your resume."
          highlight="Find jobs that fit."
          description="Upload once. CampusPe reads your skills, experience, and preferences, then finds relevant jobs across 1,000+ sources."
        />

        <div className={styles.stage}>
          <div className={`${styles.floatChip} ${styles.matchChip}`}>
            <strong>98% Match Rate</strong>
            <small>AI semantic rank</small>
          </div>
          <div className={`${styles.floatChip} ${styles.atsChip}`}>
            <strong>ATS Compliant</strong>
            <small>Standardized parser</small>
          </div>

          <div className={styles.card}>
            <div
              className={`${styles.drop} ${dragging ? styles.dropActive : ""}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <h3>Upload your resume</h3>
              <p className={styles.hint}>
                PDF, DOC, or DOCX. Up to 10MB. We&apos;ll use it to understand
                your skills and experience.
              </p>

              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className={styles.input}
                onChange={(e) => handleFile(e.target.files[0])}
                aria-label="Choose resume file"
              />

              <button
                type="button"
                className={styles.uploadBtn}
                onClick={() => inputRef.current.click()}
              >
                Upload resume ↑
              </button>

              <p className={styles.or}>or drag and drop your file here</p>

              <div className={styles.types}>
                <span>PDF</span>
                <span>DOC</span>
                <span>DOCX</span>
              </div>

              <div aria-live="polite" className={styles.status}>
                {error && <p className={styles.error}>{error}</p>}
                {file && (
                  <p className={styles.success}>
                    ✓ {file.name} ({(file.size / 1024).toFixed(0)} KB)
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={handleRemove}
                    >
                      Remove
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <ul className={styles.checks}>
          {checks.map((c) => (
            <li key={c.title} className={styles.check}>
              <span className={styles.tick} aria-hidden="true">✓</span>
              <div>
                <strong>{c.title}</strong>
                <small>{c.note}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}