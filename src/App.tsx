import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Workshops from "./Workshops";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Workshops />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
