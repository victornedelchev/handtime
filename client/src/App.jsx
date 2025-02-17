import About from "./components/about/About";
import Client from "./components/client/Client";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/hero/Header";
import Slider from "./components/hero/Slider";
import Info from "./components/info/Info";
import FeatureWatches from "./components/products/FeatureWatches";
import NewArrivals from "./components/products/NewArrivals";
import TopSaleWatches from "./components/products/TopSaleWatches";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <Service />
      <About />
      <TopSaleWatches />
      <FeatureWatches />
      <NewArrivals />
      <Contacts />
      <Client />
      <Info />
      <Footer />
    </>
  );
}

export default App;
