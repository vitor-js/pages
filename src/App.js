import React from "react";

//# components
import Router from "./router";
import Header from "./components/header";

//# styles
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
