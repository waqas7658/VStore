import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Collection from "./Page/Collection";
import Home from "./Page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Page/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
