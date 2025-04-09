import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivitRoute from "./route/PrivitRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // useEffect(() => {
  //   console.log(authenticate);
  // }, [authenticate]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivitRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
