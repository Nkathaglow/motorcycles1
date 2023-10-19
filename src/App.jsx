import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Layout/Navbar'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Landingpage from './components/Pages/Landingpage'
import Cart from './components/Pages/Cart'
import Onsale from './components/Pages/Onsale'
import Contact from './components/Pages/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/onsale" element={<Onsale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Landingpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
