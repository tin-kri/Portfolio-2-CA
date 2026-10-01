import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/projects/:id" element={<ProjectPage />} /> 
      </Routes>
    </>
  );
}

export default App;
