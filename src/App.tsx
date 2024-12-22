import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/home/Homepage";
import Almouhaqia from "./pages/almouhaqia/Home";


function App() {

  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/almouhaqia" element={<Almouhaqia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
