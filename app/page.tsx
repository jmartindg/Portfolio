import { FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  const resumeLink: string =
    "https://docs.google.com/document/d/1B9UHW7tlaz0FRBoiRygJ7qcrlPewC59rm96uLCRqLpA/edit?usp=sharing";
  const githubLink: string = "https://github.com/jmartindg";
  const linkedinLink: string = "https://www.linkedin.com/in/john-martin-de-guia-b788b7205/";

  return (
    <>
      <main className="min-h-screen bg-[url('./assets/img/hero-bg.svg')] bg-cover bg-no-repeat">
        <section className="container relative flex min-h-screen flex-col justify-center px-4">
          <h1 className="text-5xl font-black uppercase tracking-wide">Hi, I&apos;m John Martin De Guia</h1>
          <p className="w-2/3 py-6 text-xl leading-normal">
            A{" "}
            <span className="text-3xl font-bold text-red-600 hover:underline hover:underline-offset-8">
              Front-End Developer
            </span>{" "}
            designing and building the Front-End of Websites and Web Applications
          </p>
          <section className="pt-3">
            <a
              href={resumeLink}
              className="rounded bg-red-600 px-7 py-4 font-medium text-white transition duration-150 hover:bg-red-700"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </section>

          <div className="absolute right-0 bg-white p-4 shadow-lg">
            <div className="flex flex-col space-y-6">
              <a href={githubLink} className="transition duration-150 hover:text-red-600" target="_blank" rel="noreferrer">
                <FaGithub size={35} />
              </a>
              <a href={linkedinLink} className="transition duration-150 hover:text-red-600" target="_blank" rel="noreferrer">
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
