import {abAutoSm, abAutoMd, abAutoLg, coinovaSm, coinovaMd, coinovaLg, dessertSm, dessertMd, dessertLg, fablenest, raffle, spaceSm, spaceMd, spaceLg, dashoardSm, dashoardMd, dashoardLg, weatherSm, weatherMd, weatherLg} from "../assets/project/index"

import ScrollImage from "./scrollImg"

type Tech ={
    label:string
    color:string
}

type Project = {
    title:string
    description:string
    alt: string
    imageSm: string
    imageMd: string
    imageLg: string
    techs: Tech[]
    liveUrl: string
    githubUrl:string
}

const projects: Project[] = [
    {
        title: "CoinOva",
        description: "Responsive Web3 cryptocurrency dashboard built with Vite, React and Tailwind CSS, featuring live ticker, portfolio tracking and crypto news.",
        alt: "CoinOva Web3 Dashboard",
        imageSm: coinovaSm,
        imageMd: coinovaMd,
        imageLg: coinovaLg,
        techs: [
            { label: "React",    color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
            { label: "Vite",     color: "bg-purple-500/10 border-purple-500/20 text-purple-300" },
            { label: "Tailwind", color: "bg-sky-400/10 border-sky-400/20 text-sky-300" },
        ],
        liveUrl: "https://coinova-eadwyne02.vercel.app/",
        githubUrl: "https://github.com/eadwyne02/coinova",
    },
    {
    title: "Finance User Dashboard",
    description: "Responsive Finance User Dashboard built with Tailwind, TypeScript and React.",
    alt: "Finance User Dashboard",
    imageSm: dashoardSm,
    imageMd: dashoardMd,
    imageLg: dashoardLg,
    techs: [
      { label: "Tailwind",   color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
      { label: "TypeScript", color: "bg-blue-600/10 border-blue-600/20 text-blue-400" },
      { label: "React",      color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
    ],
    liveUrl: "https://user-dashboard-git-master-edwins-projects-a86d7e57.vercel.app/",
    githubUrl: "https://github.com/eadwyne02/user-Dashboard",
    },
    {
    title: "Food Store Web Application",
    description: "Responsive food ordering website built with HTML, CSS, Tailwind and Vanilla JavaScript.",
    alt: "Food Store Web Application",
    imageSm: dessertSm,
    imageMd: dessertMd,
    imageLg: dessertLg,
    techs: [
      { label: "HTML",    color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
      { label: "CSS",     color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
      { label: "JS",      color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
      { label: "Tailwind",color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
    ],
    liveUrl: "https://eadwyne02.github.io/Dessert-Product/",
    githubUrl: "https://github.com/eadwyne02/Dessert-Product",
    },
    {title: "Automobile Workshop Website",
    description: "Responsive automobile workshop website built with HTML, CSS and Vanilla JS.",
    alt: "Automobile Workshop Website",
    imageSm: abAutoSm,
    imageMd: abAutoMd,
    imageLg: abAutoLg,
    techs:[
        {label: "HTML", color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
        { label: "CSS",  color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
        { label: "JS",   color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
    ],
    liveUrl: "https://ammeerullahiandbrothersauto.github.io/Company-website-/",
    githubUrl: "https://github.com/ammeerullahiandbrothersauto/Company-website-",
    },
  
  {
    title: "Space Travel Experience Website",
    description: "Modern space tourism website built with HTML, CSS, Tailwind and Vanilla JavaScript.",
    alt: "Space Tour Website",
    imageSm: spaceSm,
    imageMd: spaceMd,
    imageLg: spaceLg,
    techs: [
      { label: "HTML",    color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
      { label: "CSS",     color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
      { label: "JS",      color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
      { label: "Tailwind",color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
    ],
    liveUrl: "https://eadwyne02.github.io/Space-Tourism/",
    githubUrl: "https://github.com/eadwyne02/Space-Tourism",
  },
  {
    title: "Weather App",
    description: "Responsive weather forecast app built with HTML, CSS and JavaScript.",
    alt: "Weather App Website",
    imageSm: weatherSm,
    imageMd: weatherMd,
    imageLg: weatherLg,
    techs: [
      { label: "HTML", color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
      { label: "CSS",  color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
      { label: "JS",   color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
    ],
    liveUrl: "https://eadwyne02.github.io/Weather-App/",
    githubUrl: "https://github.com/eadwyne02/Weather-App",
  },
  {
    title: "FableNest Blog",
    description: "Responsive FableNest Blog built with HTML, CSS, Tailwind and TypeScript.",
    alt: "Blog website",
    imageSm: fablenest,
    imageMd: fablenest,
    imageLg: fablenest,
    techs: [
      { label: "HTML",       color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
      { label: "CSS",        color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
      { label: "Tailwind",   color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
      { label: "TypeScript", color: "bg-blue-600/10 border-blue-600/20 text-blue-400" },
    ],
    liveUrl: "https://eadwyne02.github.io/Weather-App/",
    githubUrl: "https://github.com/eadwyne02/Weather-App",
  },
  {
    title: "Raffle Draw",
    description: "Responsive Raffle Draw built with HTML, Tailwind and JavaScript.",
    alt: "Raffle Draw",
    imageSm: raffle,
    imageMd: raffle,
    imageLg: raffle,
    techs: [
      { label: "HTML",    color: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
      { label: "JS",      color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
      { label: "Tailwind",color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300" },
    ],
    liveUrl: "https://eadwyne02.github.io/Wther-App/",
    githubUrl: "https://github.com/eadwyne02/Weather-App",
  },
]
const ExternalLinkIcon = (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
)
const GithubIcon = (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
)

interface ProjectListProps{
    limit ?:number
}
export default function ProjectList({ limit }: ProjectListProps) {
    const displayedProjects = limit !== undefined ? projects.slice(0, limit) : projects
    return(
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.map((project) => (
                    <div key={project.title} className="project-card group bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(99,102,241,0.1)]">
                        <div className="img-viewport w-full h-48 sm:h-52 lg:h-56 overflow-hidden relative bg-[#0d1b2e] cursor-pointer">
                            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(15,23,42,0.6)]"></div>
                            <ScrollImage
    imageSm={project.imageSm}
    imageMd={project.imageMd}
    imageLg={project.imageLg}
    alt={project.alt}
    
  />
                        </div>
                        <div className="p-5">
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.techs.map((tech) =>(
                                    <span key={tech.label} className={`text-[10px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full border ${tech.color}`}>
                                        {tech.label}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-slate-200 font-semibold text-[0.95rem] mb-2 lg:text-[1.2rem]">{project.title}</h3>
                            <p className="text-slate-500 text-[0.8rem] leading-relaxed mb-5 lg:text-[1rem]">{project.description}</p>
                            <div className="flex gap-2.5">
                                <a href={project.liveUrl} target="blank" className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-4 py-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/28 hover:border-indigo-500/55 hover:text-indigo-200 transition-all duration-200 lg:text-[1rem]">
                                    {ExternalLinkIcon} Live Demo
                                </a>
                                <a href={project.githubUrl} target="_blank" className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-white/[0.09] hover:border-white/20 hover:text-slate-300 transition-all duration-200 lg:text-[1rem]">
                                    {GithubIcon} GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}