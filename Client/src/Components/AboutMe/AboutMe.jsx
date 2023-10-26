import React from "react";
import { useSelector } from "react-redux";
import {motion , useAnimation} from 'framer-motion'
import styles from "./AboutMe.module.css"
import LogoJavaScript from '../../Assets/LogosTec/LogoJavaScript.png';
import LogoReact from '../../Assets/LogosTec/LogoReact.png';
import LogoHTML from '../../Assets/LogosTec/LogoHTML.png';
import LogoCSS from '../../Assets/LogosTec/LogoCSS.png';
import LogoRedux from '../../Assets/LogosTec/LogoRedux.png';
import LogoNode from '../../Assets/LogosTec/LogoNode.png';
import LogoSequelize from '../../Assets/LogosTec/LogoSequelize.png';
import LogoExpress from '../../Assets/LogosTec/LogoExpress.png';
import LogoPostgre from '../../Assets/LogosTec/LogoPostgre.png';


function AboutMe() {

  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);

  const controls = useAnimation();
  const scrollToContacto = async () => {
    const destino = document.getElementById("contacto")
      if(destino){
        await controls.start({y:destino.offsetTop })
        window.scrollTo({top: destino.offsetTop, behavior: 'smooth'})
      }
    }

  return (
    <div id="sobreMi" className={`${styles.containerLight} ${temaClaro ? '' : styles.containerDark}`}>
        <motion.div>
            <div className={`${styles.title} ${temaClaro ? '' : styles.titleDark}`}>
                {idioma === 'ES' && <h2>SOBRE MÍ</h2>}
                {idioma === 'EN' && <h2>ABOUT ME</h2>}
            </div>
            <div className={styles.content}>   
                <div className={`${styles.paragraph} ${temaClaro ? '' : styles.paragraphDark}`}>
                    <div className={`${styles.title2} ${temaClaro ? '' : styles.title2Dark}`}>
                        {idioma === 'ES' && <h3>Conóceme!</h3>}
                        {idioma === 'EN' && <h3>Get to know me!</h3>}
                    </div>
                    <p>
                    {idioma === 'ES' && (
                    <p>Soy un <span>Desarrollador Web Full Stack</span> apasionado por crear soluciones digitales impactantes. Mi experiencia incluye proyectos diversos, así como roles de <span>Community Manager y Web Manager</span>, donde he desarrollado estrategias de marketing y gestionado sitios web empresariales.
                    <br></br>
                    <br></br>
                    Mi capacidad de liderazgo, <span>trabajo en equipo</span> y creatividad son mis rasgos distintivos en el mundo del desarrollo. Estoy listo para contribuir a <span>proyectos</span> significativos y abierto a oportunidades laborales que me permitan aprender y crecer. Si tienes una oportunidad que coincida, no dudes en contactarme.
                    </p>)}
                    {idioma === 'EN' && (
                    <p>I'm a <span>Full Stack Web Developer</span>. My goal is to create impactful digital solutions that enhance people's lives. I have experience as a <span>Community Manager and Web Manager</span>, developing marketing strategies and maintaining corporate websites. I'm an enthusiast of continuous learning, always staying updated with the latest trends in web development and marketing. Furthermore, I value collaboration and <span>teamwork</span>. I'm ready to contribute my skills and knowledge to meaningful projects.
                    </p>)}

                    </p>
                    <button onClick={scrollToContacto} className={styles.contactButton}>
                        {idioma === 'ES' && "CONTACTO"}
                        {idioma === 'EN' && "CONTACT"}
                    </button>
                </div>

                <div className={styles.skills}>
                    <div className={`${styles.Tecs} ${temaClaro ? '' : styles.TecsDark}`}>
                        {idioma === 'ES' && <h3>TECNOLOGIAS</h3>}
                        {idioma === 'EN' && <h3>My Skills</h3>}
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="JavaScript">
                        <img className={styles.JavaScript} src={LogoJavaScript} alt="JavaScript" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="React">
                        <img src={LogoReact} alt="React" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="HTML">
                        <img src={LogoHTML} alt="HTML" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="CSS">
                        <img src={LogoCSS} alt="CSS" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="Redux">
                        <img src={LogoRedux} alt="Redux" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="Node js">
                        <img src={LogoNode} alt="Node" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="Sequelize">
                        <img src={LogoSequelize} alt="Sequelize" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="Express">
                        <img src={LogoExpress} alt="Express" />
                    </div>
                    <div className={`${styles.skillItem} ${temaClaro ? '' : styles.skillItemDark}`} data-skill-name="PostgreSQL">
                        <img src={LogoPostgre} alt="PostgreSQL" />
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  );
}

export default AboutMe;