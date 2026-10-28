const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.8.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"
      />
    </svg>
  );
}

export function BoltIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="currentColor" d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function RobotIcon({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="4" y="8" width="16" height="12" rx="4" />
      <path d="M12 8V4M2 14h2M20 14h2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export function SparkleIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z"
      />
    </svg>
  );
}

export function BellIcon({ size = 16 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

export function ArrowIcon({ size = 16 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function BankIcon({ size = 20 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
    </svg>
  );
}

export function CapIcon({ size = 20 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 20 }) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  );
}