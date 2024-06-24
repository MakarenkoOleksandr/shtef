import HomePage from "./components/pages/HomePage";
import Footer from "./components/sections/Footer.js";
import Header from "./components/sections/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/style.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
