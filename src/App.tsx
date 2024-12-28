import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Homepage";
import Almouhaqia from "./pages/almouhaqia/Home";
import Loading from "./components/Loading"; // Import the loader
import { useState, useEffect } from "react";
import OnlineServices from "./pages/OnlineServices/OnlineServices";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., API calls, fetching resources, etc.)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/almouhaqia" element={<Almouhaqia />} />
          <Route path="/services" element={<OnlineServices />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
