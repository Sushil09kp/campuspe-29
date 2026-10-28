import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const box = { minHeight: "80vh", padding: "48px 24px" };

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="jobs" style={{ ...box, background: "#f8fafc" }}>Jobs</section>
        <section id="colleges" style={box}>Colleges</section>
        <section id="employers" style={{ ...box, background: "#f8fafc" }}>Employers</section>
        <section id="get-started" style={box}>Get started</section>
      </main>
      <footer id="footer" style={{ ...box, minHeight: "40vh" }}>Footer</footer>
    </>
  );
}