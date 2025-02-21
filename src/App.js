import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <section className="home-section text-center py-5">
      <h1>LYCEUM OF ALABANG</h1>
      <p className="lead">
        Your journey to excellence starts here. Explore our wide range of
        programs and join us today!
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <h1 className="text-center">LYCEUM OF ALABANG EDUCATIONAL STATEMENT</h1>
        <h2>Our Philosophy</h2>
        <p>
          An institution that provides quality and relevant instruction and
          innovation for the next generation to improve the lives of
          individuals; physically, emotionally, morally, and spiritually adhere
          to the principle of God.
        </p>
        <h2>Our Mission</h2>
        <p>
          Lyceum of Alabang shall provide world-class education and training
          through competent personnel, high-end facilities, advanced technology,
          and equipment and accredited curricula of industry-based courses.
        </p>
        <h2>Our History</h2>
        <p>
          Dr. Danilo V. Ayap and Mr. Alfonso Borda, who shared the same passion
          for Education and Technology, well experience and highly competent
          people founded the Lyceum of Alabang on October 2003 with its original
          name as the National College of Science and Technology or NCST in Km.
          88 GNT Center, Putatan – Muntinlupa City. The Founding of the College
          is marked by a remarkable vision and the abiding faith of the founders
          in the decisive role of education and technology in raising the
          quality of life of the people.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
