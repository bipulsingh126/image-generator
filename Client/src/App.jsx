import React, { useContext } from "react";
import Home from "./Pages/Home.jsx";
import BuyCredit from "./Pages/BuyCredit";
import Result from "./Pages/Result";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Loing from "./Components/Loing.jsx";
import { AppContext } from "./Context/AppContext.jsx";

const App = () => {
  const {showLogin} = useContext(AppContext);
  return (
    <div className="px-4 sm:px-10 md:px-40 lg:px-28 min-h-screen bg-gradient-to-b from-[#9cc1c8] to-[#d2c292]  ">
      <NavBar/>
    {showLogin && <Loing/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
