// import "./App.css";
// import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Navbar/Navbar";
// import Collection from "./Page/Collection";
// import Home from "./Page/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductDetail from "./Page/ProductDetail";
// import Login from "./Page/Login";
// import ProtectedRoutes from "./Utils/ProtectedRoutes";
// import Cart from "./Page/Cart";
// import Signup from "./Page/Signup";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route element={<ProtectedRoutes />}>
//             <Route path="/collection" element={<Collection />} />
//             <Route path="/cart" element={<Cart />} />
//           </Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/productdetail/:id" element={<ProductDetail />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LazyNavbar = lazy(() => import("./Components/Navbar/Navbar"));
const LazyCollection = lazy(() => import("./Page/Collection"));
const LazyHome = lazy(() => import("./Page/Home"));
const LazyProductDetail = lazy(() => import("./Page/ProductDetail"));
const LazyLogin = lazy(() => import("./Page/Login"));
const LazyProtectedRoutes = lazy(() => import("./Utils/ProtectedRoutes"));
const LazyCart = lazy(() => import("./Page/Cart"));
const LazySignup = lazy(() => import("./Page/Signup"));
const LazyFooter = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyNavbar />
          <Routes>
            <Route element={<LazyProtectedRoutes />}>
              <Route path="/collection" element={<LazyCollection />} />
              <Route path="/cart" element={<LazyCart />} />
            </Route>
            <Route path="/" element={<LazyHome />} />
            <Route path="/productdetail/:id" element={<LazyProductDetail />} />
            <Route path="/login" element={<LazyLogin />} />
            <Route path="/signup" element={<LazySignup />} />
            <Route path="/home" element={<LazyHome />} />
          </Routes>
          <LazyFooter />
        </Suspense>
      </Router>
    </>
  );
}
export default App;
