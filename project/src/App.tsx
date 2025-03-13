import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 👈 Import ScrollToTop
import HomePage from './pages/HomePage';
import About from './components/About';
import Facilities from './components/Facilities';
import StudentLife from './components/StudentLife';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Ye ensure karega ki har page refresh upar se ho */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
