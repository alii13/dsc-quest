import React from "react";
import logo from "./logo.svg";
import HeaderPage from "./components/header";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/mainpage";
// import './App.css';
import WindowDimensions from "./components/main/WindowDimensions"
function App() {
  const {width }= WindowDimensions();
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <MainPage width = {width} />
      </div>
    </BrowserRouter>
  );
}

export default App;
