import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CursorFollower from "./components/CursorFollwer";
import Footer from "./components/Footer"
import "./App.css"
import Gallery from "./components/Gallery";
import Intership from "./components/Intership";
import Pgdac from "./components/Pgdac";
import Ccat from "./components/Ccat";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Terms from "./components/Terms";
import About from "./components/About";

function App() {

  return (
    <Router>
      <CursorFollower />
      <Navbar />
      <Routes>

          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/gallery" element={<Gallery />}>Gallery</Route>
          <Route path="/intership" element={<Intership />}>Intership</Route>
          <Route path="/pgdac" element={<Pgdac />}>PG-DAC</Route>
          <Route path="/ccat" element={<Ccat />}>C-CAT</Route>
          <Route path="/contact" element={<Contact />}>Contact</Route>
          <Route path="/register" element={<Register />}>Register</Route>
          <Route path="/terms" element={<Terms />}>Terms</Route>
          <Route path="/about" element={<About />}>About</Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
