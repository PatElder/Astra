import React from "react";
import "../CSS/menu.css";
import "../CSS/App.css";
import "../CSS/home.css";

export default function home() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="flex-container">
        <img
          src="https://creativetacos.com/wp-content/uploads/2019/02/Lazeez-Watercolor-Textures-4K-UHD-Backgrounds2.jpg"
          alt="water color texture"
          id="headerimg"
        />
        <div className="text-block">
          <h6>Astra is the expert in background music</h6>
          <p>
            We seek to recommend the greatest genres in a minimal way with a
            rotating list of genres!
          </p>
        </div>
      </div>
    </div>
  );
}
