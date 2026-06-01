import resume from "../assets/Adeyi-Samuel Edwin Web developer resume.pdf"
import Skills from "../components/skills"
export default function About (){
    return(
        <div className="bg-[#0f172a] py-28 px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl  font-semibold text-slate-100 mb-4 tracking-tight">About Me</h2>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto"> I am a frontend developer passionate about creating engaging and user-friendly websites. I specialize in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React. I enjoy building responsive, visually appealing interfaces that combine clean design with functionality. <br/>
                Currently pursuing a degree in Mechanical Engineering at Ladoke Akintola University of Technology, I balance technical knowledge with creativity and a strong commitment to continuous learning and innovation.
                </p>
                <div className="mt-8">
                    <a href={resume} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                        <i className="fas fa-download"></i>
                        Download Resume</a>
                </div>
            </div>
            <Skills />
        </div>
    )
}