import React from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import SignIn from "./routes/SignIn";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
