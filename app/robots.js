export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://campuspe-29.vercel.app/sitemap.xml",
  };
}