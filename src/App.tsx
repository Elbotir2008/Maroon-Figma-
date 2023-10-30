import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import Allhome from "./pages/home/AllHome.tsx";
import Katalog1 from "./pages/katalog/katalog-1/Katalog1.tsx";
import OneCatalog from "./pages/oneCatalog/OneCatalog.tsx";
import { useState } from "react";
import Cart from "./pages/korzinka/Cart.tsx";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.tsx";
export type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  numOfProducts?: number;
};
const App = () => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <div>
      {/* <Provider store={store}> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Allhome />} />
          <Route path="/catalog" element={<Katalog1 />} />
          <Route
            path="oneCatalog/:id"
            element={<OneCatalog cart={cart} setCart={setCart} />}
          />
          <Route
            path="/korzinka"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </Router>
      {/* </Provider> */}
    </div>
  );
};

export default App;
