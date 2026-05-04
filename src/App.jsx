import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/projekty" element={<Projects />} />
        <Route path="/projekty/:id" element={<ProjectDetails />} />
      </Routes>
      <div className="bg-zinc-950 text-white min-h-screen">
        {/* app */}
      </div>
      <Footer />
    </>
  );
}