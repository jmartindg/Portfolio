import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  const githubLink: string = "https://github.com/jmartindg";
  const linkedinLink: string = "https://www.linkedin.com/in/john-martin-de-guia-b788b7205/";

  return (
    <footer className="bg-black">
      <section className="container grid grid-cols-1 px-4 py-12 text-gray-50 md:grid-cols-12">
        <section className="md:col-span-9">
          <h4 className="text-xl font-bold uppercase tracking-wide">John Martin De Guia</h4>
          <p className="w-full pt-4 text-sm leading-6 text-gray-200 md:w-8/12">
            A Front-End Developer designing and building the Front-End of Websites and Web Applications. Email me at
            <span className="font-medium"> jmartindeguia09@gmail.com</span>
          </p>
        </section>
        <section className="mt-7 md:col-span-3 md:mt-0">
          <h4 className="text-xl font-bold uppercase tracking-wide">Social</h4>
          <section className="flex items-center space-x-4 pt-4">
            <a href={githubLink} className="transition duration-150 hover:text-red-600" target="_blank" rel="noreferrer">
              <FaGithub size={25} />
            </a>
            <a href={linkedinLink} className="transition duration-150 hover:text-red-600" target="_blank" rel="noreferrer">
              <FaLinkedin size={25} />
            </a>
          </section>
        </section>
      </section>
      <section className="container bg-black px-4 py-6 text-gray-200">
        <p className="border-t border-t-gray-500 pt-6 text-center text-xs">
          &copy; {getCurrentYear} | John Martin De Guia | Front-End Developer
        </p>
      </section>
    </footer>
  );
};

export default Footer;
