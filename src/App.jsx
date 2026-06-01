import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";
import MatrixRain from "./components/MatrixRain";
import AnimeBackground from "./components/AnimeBackground";
import GradientBackground from "./components/GradientBackground";
import LanguageWrapper from "./components/LanguageWrapper";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/*  TŁO */}
      {path === "/o-mnie" ? (
        <AnimeBackground />
      ) : (
        <GradientBackground />
      )}

      {/*  MATRIX tylko na Home */}
      {path === "/" && (
        <>
          <MatrixRain side="left" />
          <MatrixRain side="right" />
        </>
      )}

      <Navbar />
      <ScrollToHash />
      <LanguageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/projekty" element={<Projects />} />
        <Route path="/projekty/:id" element={<ProjectDetails />} />
      </Routes>
      </LanguageWrapper>
      <Footer />
    </div>
  );
}