import "./globals.css";
import HeroBanner from "./pages/Home/HeroBanner";
import Projects from "./pages/Home/Projects";
import Skills from "./pages/Home/Skills";
import MissionVission from "./pages/Home/MissioVision";
import Pricing from "./pages/Home/Educations";
import ClientsReviews from "./pages/Home/ClientsReviews";
import Contact from "./pages/Home/Contact";

export default function Home() {
  return (
    <>
    <HeroBanner/>
    <Projects/>
    <Skills/>
    <MissionVission/>
    <Pricing/>
     <ClientsReviews/>
     <Contact/>
    </>
  );
}
