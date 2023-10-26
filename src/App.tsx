import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.jsx";
import Hero from "./pages/home/hero-section/Hero.js";
import Section1 from "./pages/home/section-1/section1.js";
import Section2 from "./pages/home/section-2/section2.js";
import Section3 from "./pages/home/section-3/section3.js";
import Section4 from "./pages/home/section-4/section4.js";
import Section5 from "./pages/home/section-5/section5.js";
import Section6 from "./pages/home/section-6/section6.js";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
