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
import Logout from "./components/logout/Logout";
import Details from "./components/details/Details";
import AddWatch from "./components/addWatch/AddWatch";
import EditWatch from "./components/editWatch/EditWatch";
import NotFound from "./components/notFound/NotFound";
import AuthContextProvider from "./contexts/AuthContextProvider";
import UserProtectedRoutes from "./common/UserProtectedRoutes";
import GuestProtectedRoutes from "./common/GuestProtectedRoutes";
import WorldClock from "./components/worldClock/WorldClock";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world-clock" element={<WorldClock />} />
        <Route path="/about" element={<About />} />
        <Route element={<UserProtectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/client" element={<Client />} />
        <Route element={<GuestProtectedRoutes />}>
          <Route path="/watches/add-watch" element={<AddWatch />} />
          <Route path="/watches/:watchId/edit" element={<EditWatch />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/watches/:watchId/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
