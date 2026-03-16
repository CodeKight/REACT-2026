import React from "react";
import Card from './components/Card'
import Navbar from "./components/navbar";


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar />
      {Card()}
      {Card()}{" "}
      {/* you can use both method but you need to use {...} to call the function in this method */}

      <Card />
      <Card />
      <Card />
      <Card />
      

    </div>
  );
};

export default App;
