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
      <div id="backgroundimg">
        <div className="flex-container ">
          <div className="text-block">
            <h2>Astra is the expert in background music</h2>
            <p>
              We seek to recommend the greatest genres in a minimal way with a
              rotating list of genres!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
