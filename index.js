
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Welcome to Southeast Drum Studios</h1>
    <p>Professional Drummer: Alex Crockett</p>
    <p>Site Coming Soon – Fully SEO & Opt-in Ready!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
