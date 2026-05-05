import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 -z-20 opacity-10 
        bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] 
        [background-size:20px_20px]"></div>

      {/*  GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[30%] left-[50%] w-[300px] h-[300px] bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/projekty" element={<Projects />} />
        <Route path="/projekty/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}