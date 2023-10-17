import React from "react";
import { useSelector } from 'react-redux';

import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/SideBar/SideBar";
import Inicio from "./Components/Inicio/Inicio";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contacto from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const temaClaro = useSelector((state) => state.temaClaro);

  return (
    <div className={`AppContainer ${temaClaro ? '' : 'darkAppContainer'}`}>
      <Navbar/>
      <Inicio/>
      <Sidebar/>
      <RightSideBar/>
      <AboutMe/>
      <Projects/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;