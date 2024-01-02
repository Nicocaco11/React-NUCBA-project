import React from "react"
import ReactDOM from "react-dom/client"
import "../styles/style.css"
import Navbar from './Navbar'
import Hero from "./Hero"


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar/>
    <Hero/>
  </>
);
