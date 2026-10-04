import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import "./App.css";

const App = () => {
  return (
    <div className="bg-red-700">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
