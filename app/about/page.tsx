import { Metadata } from "next";
import { AboutType } from "@shared-types/about";
import { TopicType } from "@shared-types/topic";
import { useFetch } from "@hooks/useFetch";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import dynamic from "next/dynamic";
import Section from "@components/common/Section";
import Title from "@components/texts/Title";
import About from "@components/about/About";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import Topic from "@components/about/Topic";
import SocMed from "@components/ui/SocMed";
import BackToTop from "@components/buttons/BackToTop";
import StackIcon from "@components/ui/StackIcon";
import Picture from "@components/common/Picture";

const Footer = dynamic(() => import("@components/footer/Footer"));

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = async () => {
  const { abouts } = await useFetch("/api/abouts");
  const { topics } = await useFetch("/api/topics");
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#about"} />
        <Section id={"about"} contentClassName={"gap-[100px]"}>
          <Title
            name={"about me"}
            desc={"Let's dive deeper of who am I behind the social media."}
          />
          <div className="about-me w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly ">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square shadow-md shadow-gray-500 mb-4 rounded-lg overflow-hidden">
              <Picture
                src={"me_x4brue"}
                alt={"Jam Moonbami"}
                isPriority={true}
              />
            </div>
            <div className="about-me flex flex-col gap-[30px] ">
              {abouts ? (
                abouts.map((about: AboutType) => (
                  <About
                    key={about._id}
                    displayName={about.displayName}
                    desc={about.desc}
                    fullName={about.fullName}
                    nickname={about.nickname}
                    age={about.age}
                    birthday={about.birthday}
                    sex={about.sex}
                    nationality={about.nationality}
                    status={about.status}
                    languages={about.languages}
                  />
                ))
              ) : (
                <LoadingSpinner />
              )}
            </div>
          </div>
          <div className="topics w-full grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10 ">
            {topics ? (
              topics.map((topic: TopicType) => (
                <Topic key={topic._id} title={topic.title} desc={topic.desc} />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </Section>
        <Section id={"stack"} contentClassName={"gap-[100px]"}>
          <Title
            name={"tech stack"}
            desc={
              "All of my current technology stack that I really enjoy using. Looking forward to learn more."
            }
          />
          <div className="stacks inline-grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7">
            <StackIcon
              ariaLabel={"Python"}
              href={"https://www.python.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              }
              alt={"python logo"}
            />
            <StackIcon
              ariaLabel={"Ren'Py"}
              href={"https://www.renpy.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/renpy/renpy-original.svg"
              }
              alt={"renpy logo"}
            />
            <StackIcon
              ariaLabel={"JavaScript"}
              href={"https://www.javascript.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              alt={"javascript logo"}
            />
            <StackIcon
              ariaLabel={"TypeScript"}
              href={"https://www.typescriptlang.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              }
              alt={"typescript logo"}
            />
            <StackIcon
              ariaLabel={"React"}
              href={"https://react.dev/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              }
              alt={"react logo"}
            />
            <StackIcon
              ariaLabel={"NextJs"}
              href={"https://nextjs.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              }
              alt={"nextjs logo"}
            />
            <StackIcon
              ariaLabel={"NodeJs"}
              href={"https://nodejs.org/en"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              }
              alt={"nodejs logo"}
            />
            <StackIcon
              ariaLabel={"ExpressJs"}
              href={"https://expressjs.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              }
              alt={"expressjs logo"}
            />
            <StackIcon
              ariaLabel={"TailwindCSS"}
              href={"https://tailwindcss.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
              alt={"tailwindcss logo"}
            />
            <StackIcon
              ariaLabel={"Sass"}
              href={"https://sass-lang.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              }
              alt={"sass logo"}
            />
            <StackIcon
              ariaLabel={"CSS"}
              href={"https://web.dev/learn/css"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              }
              alt={"css3 logo"}
            />
            <StackIcon
              ariaLabel={"HTML"}
              href={"https://html.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              }
              alt={"html5 logo"}
            />
            <StackIcon
              ariaLabel={"Figma"}
              href={"https://www.figma.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              }
              alt={"figma logo"}
            />
            <StackIcon
              ariaLabel={"Photoshop"}
              href={
                "https://www.adobe.com/ph_en/products/photoshop/free-trial-download.html"
              }
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              }
              alt={"photoshop logo"}
            />
            <StackIcon
              ariaLabel={"Git"}
              href={"https://git-scm.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              }
              alt={"git logo"}
            />
            <StackIcon
              ariaLabel={"MongoDB"}
              href={"https://www.mongodb.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              }
              alt={"mongodb logo"}
            />
          </div>
        </Section>
        <Section id={"contact"} contentClassName={"gap-[30px]"}>
          <Title
            name={"Contact Me"}
            desc={
              "If you have any concerns, questions or if you just want to be friends with me. Please, contact me to any of these that you prefer."
            }
          />
          <hr className="w-full" />
          <div className=" socmeds grid grid-cols-2 gap-[30px]">
            <SocMed
              href={"https://www.facebook.com/moonbamijam"}
              ariaLabel={"Facebook"}
              icon={<FaFacebook />}
              text={"facebook"}
            />
            <SocMed
              href={"https://www.instagram.com/moonbamidesu/"}
              ariaLabel={"Instagram"}
              icon={<FaInstagram />}
              text={"instagram"}
            />
            <SocMed
              href={"https://twitter.com/Moonbami_"}
              ariaLabel={"X"}
              icon={<FaXTwitter />}
              text={"twitter x"}
            />
            <SocMed
              href={"https://github.com/MoonbamiOfficial"}
              ariaLabel={"GitHub"}
              icon={<FaGithub />}
              text={"GitHub"}
            />
          </div>
          <hr className="w-full" />
          <p className="last-phrase text-center paragraph-format">
            I do have more social media accounts but these are my commonly used
            ones.
          </p>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
