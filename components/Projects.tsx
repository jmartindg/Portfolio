import Image, { StaticImageData } from "next/image";
import FiberThumbnail from "../public/Fiber_Thumbnail.jpg";
import GymZoneThumbnail from "../public/GymZone_Thumbnail.jpg";
import ReelsparkThumbnail from "../public/Reelspark_Thumbnail.jpg";
import ShortenItThumbnail from "../public/shortenIt_Thumbnail.jpg";
import TodoItThumbnail from "../public/Todo_it_Thumbnail.jpg";
import WeatherStatThumbnail from "../public/Weatherstat_Thumbnail.jpg";

type ProjectsProps = {
  id: number;
  name: string;
  demoLink: string;
  repoLink: string;
  thumbnail: StaticImageData;
  technologies: TechnologyProps[];
  description: string;
};

type TechnologyProps = {
  id: number;
  name: string;
};

const Projects = () => {
  const projects: ProjectsProps[] = [
    {
      id: 1,
      name: "Reelspark",
      demoLink: "https://reelspark.vercel.app/",
      repoLink: "https://github.com/jmartindg/Reelspark",
      thumbnail: ReelsparkThumbnail,
      technologies: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Tailwind CSS",
        },
      ],
      description:
        "Reelspark is a movie and tv shows information website that uses The Movie Database API(TMDB). Browse your favorite movies or tv shows information for free.",
    },
    {
      id: 2,
      name: "GymZone",
      demoLink: "https://gymzone.vercel.app/",
      repoLink: "https://github.com/jmartindg/GymZone-v2",
      thumbnail: GymZoneThumbnail,
      technologies: [
        {
          id: 1,
          name: "Next.js",
        },
        {
          id: 2,
          name: "Tailwind CSS",
        },
        {
          id: 3,
          name: "Directus",
        },
      ],
      description:
        "GymZone is a gym website where customers or potential customers can view information about the gym. It also has a blog system that uses Directus Headless CMS.",
    },
    {
      id: 3,
      name: "Todo_it",
      demoLink: "https://app-todo-it.vercel.app/",
      repoLink: "https://github.com/jmartindg/Todo_it",
      thumbnail: TodoItThumbnail,
      technologies: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Tailwind CSS",
        },
        {
          id: 3,
          name: "Supabase",
        },
      ],
      description:
        "Todo_it is a to-do list web application that allows you to add, update, view, and delete your todo's. It uses Supabase which is an open-source alternative to Firebase that handles this project's database and authentication.",
    },
    {
      id: 4,
      name: "shortenIt",
      demoLink: "https://sh0rtenit.vercel.app/",
      repoLink: "https://github.com/jmartindg/shortenIt",
      thumbnail: ShortenItThumbnail,
      technologies: [
        {
          id: 1,
          name: "Vue",
        },
        {
          id: 2,
          name: "Tailwind CSS",
        },
        {
          id: 3,
          name: "shrtcode API",
        },
      ],
      description:
        "shortenIt is a web application that allows you to shorten a long URL for free. It uses shrtcode API which is a free public API.",
    },
    {
      id: 5,
      name: "Weatherstat",
      demoLink: "https://weatherstat.netlify.app/",
      repoLink: "https://github.com/jmartindg/Weatherstat",
      thumbnail: WeatherStatThumbnail,
      technologies: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "SCSS",
        },
        {
          id: 3,
          name: "JavaScript",
        },
        {
          id: 4,
          name: "OpenWeatherMap API",
        },
      ],
      description:
        "Weatherstat is a weather web application where you can search for current weather data in different cities, and towns around the world.",
    },
    {
      id: 6,
      name: "Fiber",
      demoLink: "https://fiberpage.netlify.app/",
      repoLink: "https://github.com/jmartindg/Fiber-Landing-Page",
      thumbnail: FiberThumbnail,
      technologies: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "SCSS",
        },
        {
          id: 3,
          name: "JavaScript",
        },
        {
          id: 4,
          name: "Bootstrap",
        },
      ],
      description:
        "Fiber is a landing page challenge from Codewell where you will be provided with real-world design templates that you can use to practice your HTML and CSS skills.",
    },
  ];

  return (
    <section className="bg-white">
      <section className="container px-4 py-20">
        <h2 className="projects-txt relative block text-center text-3xl font-bold uppercase">Projects</h2>
        {projects.map((project) => (
          <article key={project.id} className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Image src={project.thumbnail} placeholder="blur" alt={project.name} className="rounded shadow-lg" />
            <section className="flex flex-col justify-center">
              <header className="mb-8">
                {project.technologies.map((technology) => (
                  <span key={technology.id} className="mr-2 rounded bg-red-600 px-2.5 py-0.5 text-sm text-gray-50">
                    {technology.name}
                  </span>
                ))}
              </header>
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="py-6 text-gray-800">{project.description}</p>
              <footer className="mt-3 space-x-3">
                <a
                  href={project.demoLink}
                  className="rounded border border-transparent bg-red-600 px-6 py-3 text-white transition duration-150 hover:bg-red-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.repoLink}
                  className="rounded border border-red-600 px-6 py-3 text-red-600 transition duration-150 hover:border-red-600 hover:bg-red-600 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </footer>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
