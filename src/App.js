import Home from "./components/pages/Home";
import Nav from "./components/pages/Nav";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { GlobalStyles, MainDiv } from "./Global.style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainDiv>
      <GlobalStyles />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </MainDiv>
  );
}

export default App;
