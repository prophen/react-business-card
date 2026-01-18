import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="profile">
        <Info />
      </div>
      <div className="details">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
