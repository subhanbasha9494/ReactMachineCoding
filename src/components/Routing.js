import Navbar from "./Navbar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";

const Routing = () => {
  return (
    <div>
      <Navbar />
      <h1>Routing</h1>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;