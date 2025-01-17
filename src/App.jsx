import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Gifts from "./components/Gifts";
import Footer from "./components/footer";
import FotOne from "./components/FotOne";
import FotTwo from "./components/FotTwo";
import Virtual from "./components/Virtual";
import VirtualOne from "./components/VirtualOne";
import VirtualTwo from "./components/VirtualTwo";
import VirtualThree from "./components/VirtualThree";
import VirtualFour from "./components/VirtualFour";
import VirtualFive from "./components/VirtualFive";
import Top from "./components/Top";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Header />

      <Top />
      <Slider/>
      <Products />
   
      <VirtualFive />
      <Slider/>
      <VirtualFour />
      <VirtualThree />
      <VirtualTwo />
      <VirtualOne />
      <Virtual />
      <FotTwo />
      <FotOne />
      <Footer />
    </div>
  );
}

export default App;
