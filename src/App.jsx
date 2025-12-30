import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfessionalStatement from "./components/ProfessionalStatement";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function App() {
  return (
    <>
      <Header />

      <div className="page-offset">
        <Hero />
        <ProfessionalStatement />
         <Education />
         <Experience />
    	 <Skills />
	 <Projects />
      </div>
    </>
  );
}
