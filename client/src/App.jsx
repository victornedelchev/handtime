import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import Client from "./components/client/Client";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Header from "./components/Header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Details from "./components/details/Details";
import AddWatch from "./components/addWatch/AddWatch";
import { AuthContext } from "./contexts/authContext";

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem("accessToken", state.accessToken);
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    username: authState.username,
    email: authState.email,
    accessToken: authState.accessToken,
    createdOn: authState._createdOn,
    isAuthenticated: !!authState.username,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/client" element={<Client />} />
        <Route path="/add-watch" element={<AddWatch />} />
        <Route path="/info" element={<Info />} />
        <Route path="/watches/:watchId/details" element={<Details />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
