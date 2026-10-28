import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Partners from "./components/Partners/Partners";
import OpportunityDiscovery from "./components/OpportunityDiscovery/OpportunityDiscovery";
import ResumeUpload from "./components/ResumeUpload/ResumeUpload";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import AppShowcase from "./components/AppShowcase/AppShowcase";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import SupportCta from "./components/SupportCta/SupportCta";
import ReadyStrip from "./components/ReadyStrip/ReadyStrip";
import Footer from "./components/Footer/Footer";
import { colleges, employers } from "./data/features";

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
        <FeatureSection id="colleges" {...colleges} />
        <FeatureSection id="employers" tinted {...employers} />
        <AppShowcase />
        <DownloadApp />
        <SupportCta />
        <ReadyStrip />
        <div id="get-started" />
      </main>
      <Footer />
    </>
  );
}