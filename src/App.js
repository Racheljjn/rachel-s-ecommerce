import React from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Authentication from "../src/routes/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
