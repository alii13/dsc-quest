import React from "react";
import logo from "./logo.svg";
import HeaderPage from "./components/header";
import { BrowserRouter } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
