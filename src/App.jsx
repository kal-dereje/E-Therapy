import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home-page/Home";
import Team from "./components/Page/Team";
import Contact from "./components/Contact/Contact us";
import FQA from "./components/Page/FQA";
import Blog from "./components/Page/Blog";
import Singlepost from "./components/Page/Singlepost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Team" element={<Team />} />
          <Route path="FQA" element={<FQA />} />
            <Route path="Blog" element={<Blog />} />
             <Route path="Singlepost" element={<Singlepost />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
