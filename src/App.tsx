import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Homepage";
import Almouhaqia from "./pages/almouhaqia/Home";
import Loading from "./components/Loading";
import OnlineServices from "./pages/OnlineServices/OnlineServices";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., API calls, fetching resources, etc.)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Show the scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {/* Scroll-to-top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
