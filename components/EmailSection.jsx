import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => { 


    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2 ">Let's Connect Together!</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                I'm currently looking for internship, focusing in the area of CyberSecurity. Please drop by a message if you are interested!
                </p>
                <h4 className="pb-3 mt-6">Let's get in touch!</h4>
                <div className=" flex flex-row gap-4 mt-6">
                    <Link href="https://github.com/jtuam102">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/tuam-chun-wai-3675582a3/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>

                </div>
            </div>
        </main>
    );
};

export default EmailSection;