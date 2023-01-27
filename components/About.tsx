import { AiFillHtml5, AiOutlineMobile } from "react-icons/ai";
import { FaGit, FaGithub, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap, SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import Badge from "./Badge";

const About = () => {
  const skills = [
    {
      id: 1,
      icon: <AiFillHtml5 size={20} className="mr-2" />,
      name: "HTML",
    },
    {
      id: 2,
      icon: <IoLogoCss3 size={20} className="mr-2" />,
      name: "CSS",
    },
    {
      id: 3,
      icon: <FaSass size={20} className="mr-2" />,
      name: "SCSS",
    },
    {
      id: 4,
      icon: <SiJavascript size={20} className="mr-2" />,
      name: "JavaScript",
    },
    {
      id: 5,
      icon: <SiTypescript size={20} className="mr-2" />,
      name: "TypeScript",
    },
    {
      id: 6,
      icon: <FaReact size={20} className="mr-2" />,
      name: "React",
    },
    {
      id: 7,
      icon: <FaVuejs size={20} className="mr-2" />,
      name: "Vue",
    },
    {
      id: 8,
      icon: <FaGit size={20} className="mr-2" />,
      name: "Git",
    },
    {
      id: 9,
      icon: <FiFigma size={20} className="mr-2" />,
      name: "Figma",
    },
    {
      id: 10,
      icon: <FaGithub size={20} className="mr-2" />,
      name: "GitHub",
    },
    {
      id: 11,
      icon: <AiOutlineMobile size={20} className="mr-2" />,
      name: "Responsive Design",
    },
    {
      id: 12,
      icon: <SiTailwindcss size={20} className="mr-2" />,
      name: "Tailwind CSS",
    },
    {
      id: 13,
      icon: <SiBootstrap size={20} className="mr-2" />,
      name: "Bootstrap",
    },
  ];

  return (
    <section id="about" className="container grid grid-cols-1 gap-5 px-4 py-20 md:grid-cols-2" data-aos="fade-up">
      <section>
        <h2 className="mb-10 border-l-4 border-l-red-600 pl-3 text-2xl font-bold uppercase">About Me</h2>
        <p className="pb-4 pr-12 text-gray-600">
          I&apos;m a <span className="font-bold">Front-End Developer</span> designing and building the Front-End side of
          Websites and Web Applications. Check out some of my work in the Projects section.
        </p>

        <p className="pb-4 pr-12 text-gray-600">
          My journey started back when I was in <span className="font-bold">1st-year college</span>, I&apos;ve explored and
          learned the fundamentals and turns out that I enjoy working with websites especially on the{" "}
          <span className="font-bold">front-end side</span>.
        </p>

        <p className="pb-4 pr-12 text-gray-600">
          I&apos;m open to job opportunities where I can <span className="font-bold">contribute, learn,</span> and{" "}
          <span className="font-bold">grow</span>. If you have a good opportunity that matches my skills then don&apos;t
          hesitate to <span className="font-bold">contact</span> me.
        </p>
      </section>
      <section>
        <h2 className="mb-10 border-l-4 border-l-red-600 pl-3 text-2xl font-bold uppercase">Skills</h2>
        {skills.map((skill) => (
          <Badge key={skill.id} icon={skill.icon} name={skill.name} />
        ))}
      </section>
    </section>
  );
};

export default About;
