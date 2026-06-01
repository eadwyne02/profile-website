import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/header"))
const HomePage = lazy(() => import("./pages/home"))
const Footer = lazy(() => import("./components/footer"))
const About = lazy(() => import("./pages/about"))
const Project = lazy(() => import("./pages/projects"))
const Contact = lazy(() => import("./pages/contact"))
const ContactButton = lazy(() => import("./components/contactBtn"))
import { Route, Routes } from "react-router-dom"
function App(){
 return (
    
      <div className="bg-[#0f172a] min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
        <ContactButton />
        </Suspense>
      </div>
      
  )
}
export default App