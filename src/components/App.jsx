import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <MainContent />
      </main>
    </>
  );
}

export default App;
