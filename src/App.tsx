import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./components/Layout";
import { BasketProvider } from "./components/BasketContext";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BasketProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BasketProvider>
    </>
  );
}

export default App;
