import React from "react";
import logo from "./logo.svg";
import HeaderPage from "./components/header";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/mainpage";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
