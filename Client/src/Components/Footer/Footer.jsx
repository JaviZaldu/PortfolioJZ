import React from "react";
import { useSelector } from "react-redux";
import { useAnimation } from "framer-motion";
import styles from "./Footer.module.css";

function Footer() {
  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);

  return (
    <div id="footer" className={`${styles.containerLight} ${temaClaro ? "" : styles.containerDark}`}>
      <div className={`${styles.footerContent} ${temaClaro ? "" : styles.footerContentDark}`}>
        <div className={`${styles.aboutMeContainer} ${temaClaro ? "" : styles.aboutMeContainerDark}`}>
          <h3>Javier Zalduendo</h3>
          <p>
            {idioma === 'ES' && ("Un Desarrollador Web Full Stack apasionado por crear soluciones digitales con experiencia en desarrollo web y marketing. Siempre en busca de nuevos desafíos para ofrecer productos de alta calidad.")}
            {idioma === 'EN' && ("A Full Stack Web Developer passionate about creating digital solutions with experience in web development and marketing. Always looking for new challenges to deliver high-quality products.")}
          </p>
        </div>
      </div>
      <div className={`${styles.textContainer} ${temaClaro ? "" : styles.textContainerDark}`}>
        <p>
          {idioma === 'ES' && ("© Copyright 2023. Desarrollado por Javier Zalduendo")}
          {idioma === 'EN' && ("© Copyright 2023. Made by Javier Zalduendo")}
        </p>
      </div>
    </div>
  );
}

export default Footer;
