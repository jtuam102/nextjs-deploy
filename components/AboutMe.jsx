import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>C#</li>
        <li>SQL</li>
        <li>C++</li>
        <li>Kali Linux</li>
        <li>Ubuntu</li>
        <li>R Programming</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js Workshop</li>
        <li>Threat Hunting</li>
        <li>Codenection 2023</li>
        <li>Wargames 2023</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University</li>
        <li>Tsun Jin High School</li>
      </ul>
    ),
  },
];
//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  //1a
  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
        <div>
          <img
            src="/Jay.jpg"
            alt="About Me"
            width={450}
            height={450}
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            I am currently pursuing a degree in Cyber Security at APU, where I
            have been proving my skills in various technologies. I am familiar
            in backend development, with expertise in Python, Java, C#, and
            I&apos;m skilled in using ASP.NET and ADO.NET My passion is to
            participate more Hackathons and CTFs every year to become a better
            version of myself everyday.{" "}
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
