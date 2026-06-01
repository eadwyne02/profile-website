import ProjectList from "../components/projecctList"

export default function Project(){
    return(
        <div className="projects-section relative bg-[#0f172a] py-25 px-6 overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-slate-100 mb-3 tracking-tight ">Projects</h2>
                    <p className="text-slate-500 text-sm lg:text-[1.1rem]" id="recentWork">A selection of things I've designed and built.</p>
                </div>
                <ProjectList/>
            </div>
        </div>
    )
}