import React from "react";
import "./CSS/App.css";
import "./CSS/materialize.css";
import LongMenu from "./Components/menu";
import AppFooter from "./Components/footer";

function App() {
  return (
    <div>
      <header>
        <LongMenu />
      </header>
      <body></body>

      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
