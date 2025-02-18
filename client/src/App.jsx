import { Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import Client from "./components/client/Client";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Header from "./components/Header/Header";
import ContactsUs from "./components/contactsUs/ContactsUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contacts-us" element={<ContactsUs />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
