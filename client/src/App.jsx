import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
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
import UserProfile from "./components/userProfile/userProfile";
import AllWatches from "./components/products/AllWatches";
import NewAddedWatches from "./components/products/NewlyAddedWatches";

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
        <Route path="/all-watches" element={<AllWatches />} />
        <Route path="/newly-added-watches" element={<NewAddedWatches />} />
        <Route element={<GuestProtectedRoutes />}>
          <Route path="/watches/add-watch" element={<AddWatch />} />
          <Route path="/watches/:watchId/edit" element={<EditWatch />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/watches/:watchId/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
