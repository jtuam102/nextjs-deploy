import dynamic from "next/dynamic";
import React from "react";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Project";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";

//Server: not found error handler
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main>
        <HeroSection />
        <Projects />
        <AboutMe />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
