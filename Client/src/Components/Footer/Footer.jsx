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
        <div className={`${styles.redesContainer} ${temaClaro ? "" : styles.redesContainerDark}`}>
          <a href="https://www.linkedin.com/in/javier-zalduendo/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://github.com/JaviZaldu" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://instagram.com/javierzalduendo?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path>
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
            </svg>
          </a>
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