import React from "react";
import { useSelector } from "react-redux";
import {motion, useAnimation} from 'framer-motion'
import styles from "./Inicio.module.css"

function Inicio() {

  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);

  const controls = useAnimation();
  const scrollToProyectos = async () => {
    const destino = document.getElementById("proyectos")
      if(destino){
        await controls.start({y:destino.offsetTop})
        window.scrollTo({top: destino.offsetTop - 50, behavior: 'smooth'})
      }
  }

  return (
    <div id="inicio" className={`${styles.containerLight} ${temaClaro ? '' : styles.containerDark}`}>
        <motion.div className={styles.dataContainer}>
          <h1 className={`${styles.titleLight} ${temaClaro ? '' : styles.titleDark}`}>
            {idioma === 'ES' && ("HOLA, SOY JAVIER ZALDUENDO")}
            {idioma === 'EN' && ("HEY, I'M JAVIER ZALDUENDO")}
          </h1>
          <p className={`${styles.textLight} ${temaClaro ? '' : styles.textDark}`}>
            {idioma === 'ES' && ("Un Desarrollador Web Full Stack apasionado por la creación de soluciones digitales. Mi formación en desarrollo web y marketing me ha brindado las habilidades necesarias para construir sitios web y aplicaciones impactantes. Siempre estoy buscando nuevos desafíos y en constante aprendizaje para ofrecer productos de alta calidad.")}
            {idioma === 'EN' && ("A passionate Full Stack Web Developer dedicated to crafting digital solutions. My education in web development and marketing has equipped me with the skills needed to build impactful websites and applications. I'm always seeking new challenges and continuously learning to deliver high quality products.")}
          </p>
          <button onClick={scrollToProyectos} className={styles.botonProyectos}>
            {idioma === 'ES' && ("PROYECTOS")}
            {idioma === 'EN' && ("PROJECTS")}
          </button>
          <div className={styles.scrollPosition}>
            <div className={`${styles.scrolldown} ${temaClaro ? '' : styles.scrolldownDark}`}>
              <div className={`${styles.chevrons} ${temaClaro ? '' : styles.chevronsDark}`}>
                <div className={`${styles.chevrondown} ${temaClaro ? '' : styles.chevrondownDark}`}></div>
                <div className={`${styles.chevrondown} ${temaClaro ? '' : styles.chevrondownDark}`}></div>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
}

export default Inicio;