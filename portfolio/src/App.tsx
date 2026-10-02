import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import useScrollToId from "./hooks/useScrollToId";

function App() {
  useScrollToId();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
