import React from "react";
import "../static/css/App.css";
import Navbar from "./Navigation/Navbar";
import MobileNav from "./Navigation/MobileNav";
import MainContent from "./MainContent";

function App() {
  return (
    <div>
      <nav>
        <MobileNav />
      </nav>
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
