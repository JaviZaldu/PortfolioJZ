import React, { useState, useEffect } from 'react';
import styles from '../NavBar/NavBar.module.css';
import LogoJZNegro from '../../Assets/LogoJZNegro.png';
import LogoJZBlanco from '../../Assets/LogoJZBlanco.png';

import { useDispatch, useSelector } from 'react-redux';
import { cambioIDioma, cambioTema } from '../../Redux/actions';
import { useAnimation } from 'framer-motion';

function Navbar() {
  const dispatch = useDispatch();
  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);
  const [navbarFixed, setNavbarFixed] = useState(false);

  const handleIdiomaChange = (nuevoIdioma) => {
    if (idioma !== nuevoIdioma) {
      dispatch(cambioIDioma());
    }
  };

  const handleTemaChange = () => {
    dispatch(cambioTema());
  };
  const logoImage = temaClaro ? LogoJZNegro : LogoJZBlanco;

  const controls = useAnimation();
  const scrollToInicio = async () => {
    const destino = document.getElementById("inicio")
      if(destino){
        await controls.start({y:destino.offsetTop })
        window.scrollTo({top: destino.offsetTop, behavior: 'smooth'})
      }
    }
  
    const scrollToAboutMe = async () => {
      const destino = document.getElementById("sobreMi")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 60, behavior: 'smooth'})
        }
      }

    const scrollToProyectos = async () => {
      const destino = document.getElementById("proyectos")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 50, behavior: 'smooth'})
        }
    }

    const scrollToContacto = async () => {
      const destino = document.getElementById("contacto")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 60, behavior: 'smooth'})
        }
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`${styles.navbar} ${navbarFixed ? styles.fixedNavbar : ''} ${temaClaro ? '' : styles.darkNavbar}`}>
      
      <img className={styles.logo} src={logoImage} alt="logo" />

      <div className={`${styles.sections} ${temaClaro ? '' : styles.darkSections}`}>
        <ul>
          {idioma === 'ES' && (
            <ul>
              <li onClick={scrollToInicio}>Inicio</li>
              <li onClick={scrollToAboutMe}>Sobre mí</li>
              <li onClick={scrollToProyectos}>Proyectos</li>
              <li onClick={scrollToContacto}>Contacto</li>
            </ul>
          )}
          {idioma === 'EN' && (
            <ul>
              <li onClick={scrollToInicio}>Home</li>
              <li onClick={scrollToAboutMe}>About me</li>
              <li onClick={scrollToProyectos}>Projects</li>
              <li onClick={scrollToContacto}>Contact</li>
            </ul>
          )}
        </ul>
      </div>
      <div className={styles.Theme}>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" onChange={handleTemaChange} checked={!temaClaro} />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.Idioma}>
          <button className={`${idioma === "ES" ? styles.active : ''} ${temaClaro ? styles.lightButton : styles.darkButton}`} onClick={() => handleIdiomaChange("ES")}>ES</button>
          <button className={`${idioma === "EN" ? styles.active : ''} ${temaClaro ? styles.lightButton : styles.darkButton}`} onClick={() => handleIdiomaChange("EN")}>EN</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;