import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Partners from "./components/Partners/Partners";
import OpportunityDiscovery from "./components/OpportunityDiscovery/OpportunityDiscovery";
import ResumeUpload from "./components/ResumeUpload/ResumeUpload";

const box = { minHeight: "80vh", padding: "48px 24px" };

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <OpportunityDiscovery />
        <ResumeUpload />
        <section id="colleges" style={box}>Colleges</section>
        <section id="employers" style={{ ...box, background: "#f8fafc" }}>Employers</section>
        <section id="get-started" style={box}>Get started</section>
      </main>
      <footer id="footer" style={{ ...box, minHeight: "40vh" }}>Footer</footer>
    </>
  );
}