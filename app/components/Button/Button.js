import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  children,
  ...props
}) {
  const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
      {icon}
    </button>
  );
}