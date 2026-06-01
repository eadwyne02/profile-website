import Hero from "../components/hero";
import Skills from "../components/skills";
import ProjectList from "../components/projecctList";
import Contact from "./contact";
export default function HomePage(){
   return(
    <div>
        < Hero />
        < Skills />
        <div className="projects-section relative bg-[#0f172a] py-20 px-6 overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3 tracking-tight ">Projects</h2>
                    <p className="text-slate-500 text-sm lg:text-[1.4rem]" id="recentWork">A selection of things I've designed and built.</p>
                </div>
                <ProjectList limit={3}/>
            </div>
        </div>
        <Contact />
    </div>
   )
}