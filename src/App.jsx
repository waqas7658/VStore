import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Collection from "./Page/Collection";
import Home from "./Page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Page/ProductDetail";
import Login from "./Page/Login";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import Cart from "./Page/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
