import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import Allhome from "./pages/home/AllHome.tsx";
import Katalog1 from "./pages/katalog/katalog-1/Katalog1.tsx";
import OneCatalog from "./pages/oneCatalog/OneCatalog.tsx";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Allhome />} />
          <Route path="/catalog" element={<Katalog1 />} />
          <Route path="/oneCatalog" element={<OneCatalog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
