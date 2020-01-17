import React from "react";
import "./CSS/App.css";
import "./CSS/materialize.css";
import LongMenu from "./Components/menu";

function App() {
  return (
    <html>
      <header>
        <LongMenu />
        <div class="center">
          <h1 class="purple-text">Astra</h1>
          <h3 class="grey-text">Bringing you the best in instrumental</h3>
        </div>
        <hr />
      </header>
      <body>
        <div class="first">
          <p></p>
        </div>
      </body>
      <footer></footer>
    </html>
  );
}

export default App;
