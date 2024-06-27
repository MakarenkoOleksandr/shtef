import HomePage from "./components/pages/HomePage";
import Footer from "./components/sections/Footer.js";
import Header from "./components/sections/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/style.css";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("UA");
  const [fade, setFade] = useState(false);
  return (
    <>
      <Router>
        <Header
          language={language}
          setLanguage={setLanguage}
          fade={fade}
          setFade={setFade}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
