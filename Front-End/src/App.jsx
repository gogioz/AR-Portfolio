import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Highlight from "./Highlight/Hightlight";
import Highlights from "./Highlights/Highlights";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="  font-rubik flex flex-col justify-between ">
          <Nav />
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="highlights" element={<Highlights />} />
            <Route path="highlight" element={<Highlight />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
