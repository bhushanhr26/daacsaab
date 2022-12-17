import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import DaacSaabRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header />
      </div>
      <div>
        <DaacSaabRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
