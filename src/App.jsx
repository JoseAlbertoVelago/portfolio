import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Ssn from "./components/Ssn";

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route
        path="/"
        element={
          <>
            <Sidenav />
            <Main />
            <About />
            <Technologies />
            <Projects />
            <Contact />
          </>
        }
      />

      {/* Página para Search Science News */}
      <Route path="/ssn" element={<Ssn />} />
    </Routes>
  );
}

export default App;
