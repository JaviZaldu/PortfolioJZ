import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import styles from "./Projects.module.css";
import PatitasSinHogarFoto from '../../Assets/PatitasSinHogarFoto.png';
import PiDogsHenry from '../../Assets/PiDogsHenry.png';
import PortalDistFoto from '../../Assets/PortalDistFoto.png';


function Projects() {
  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const mostrarMasProyectos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const proyectos = [
    {
      titulo: idioma === 'ES' ? "Equipo Front-End - Patitas sin Hogar" : "Front-End Team - Patitas sin Hogar",
      descripcion: idioma === 'ES' ? "Patitas sin Hogar es una aplicación web que simplifica la búsqueda y adopción de mascotas necesitadas de un hogar. Los usuarios pueden cargar perfiles de mascotas para su adopción, explorar fácilmente nuevas compañías y compartir sus experiencias a través de reseñas. Ofrecemos la opción de donar para apoyar a las mascotas necesitadas y contamos con un panel de administrador para gestionar contenido y usuarios. Trabajé en el equipo de Front-End bajo la metodología Scrum y con herramientas como Git y GitFlow."
      : "Patitas sin Hogar is a web app that simplifies the search and adoption of pets in need of a home. Users can upload profiles of pets for adoption, easily explore new companions, and share their experiences through reviews. We offer the option to donate to support pets in need and have an admin panel to manage content and users. I worked on the Front-End team following the Scrum methodology and using tools like Git and GitFlow.",
      tecnologias: ["JavaScript", "React", "Redux", "CSS", "Bootstrap", "Express", "NodeJS ", "PostgreSQL", "Sequelize"],
      repositorio: "https://github.com/RieraAndres/Henry_PF",
      deploy: "https://henry-pf-git-main-rieraandres.vercel.app/"
    },
    {
      titulo: idioma === 'ES' ? "Desarrollador Web Full Stack - Distribuidora Portal SRL" : "Full Stack Web Developer - Distribuidora Portal SRL",
      descripcion: idioma === 'ES' ? "Distribuidora Portal SRL es una empresa que se dedica a la venta y distribución de Pañales, artículos de limpieza, perfumería y comestibles. La página web que desarrollé para ellos es una herramienta que permite a sus clientes y socios obtener información detallada sobre la empresa y acceder a una variedad de recursos y servicios en línea." 
      : "Distribuidora Portal SRL is a company dedicated to the sale and distribution of cleaning products, perfumery, and groceries. The website I developed for them is a tool that allows their customers and partners to obtain detailed information about the company and access a variety of online resources and services.",
      tecnologias: ["JavaScript", "HTML", "CSS", "jQuery"],
      deploy: "http://distribuidoraportal.com/"
    },
    {
      titulo: "Full Stack Web Developer - Henry Dogs PI",
      descripcion: idioma === 'ES' ? "Desarrollé una aplicación web que utiliza una API para proporcionar a los usuarios información detallada sobre diversas razas de perros. Los usuarios pueden personalizar su búsqueda filtrando por peso, altura o temperamento, buscar por nombre y organizar las razas alfabéticamente. También tienen la opción de crear su propia raza de perro. En este proyecto, asumí la responsabilidad completa del desarrollo de la aplicación, desde su concepción hasta su implementación." 
      : "I developed a web app that utilizes an API to provide users with detailed information about various dog breeds. Users can customize their search by filtering by weight, height, or temperament, search by name, and sort breeds alphabetically. They also have the option to create their own dog breed. In this project, I took full responsibility for the development of the application, from concept to implementation.",
      tecnologias: ["JavaScript", "React", "Redux", "CSS", "NodeJS ", "Express", "PostgreSQL", "Sequelize"],
      repositorio: "https://github.com/JaviZaldu/ProyectoIndHenryDogs"
    }
  ];



  return (
    <div id="proyectos" className={`${styles.containerLight} ${temaClaro ? '' : styles.containerDark}`}>
      <motion.div className={styles.dataContainer}>
        <div className={`${styles.title} ${temaClaro ? '' : styles.titleDark}`}>
          {idioma === 'ES' && <h2>PROYECTOS</h2>}
          {idioma === 'EN' && <h2>PROJECTS</h2>}
        </div>
        <div className={`${styles.proyectos} ${temaClaro ? '' : styles.proyectosDark}`}>
          {proyectos.slice(0, mostrarTodos ? proyectos.length : 2).map((proyecto, index) => (
            <div key={index} className={`${styles.proyecto} ${temaClaro ? '' : styles.proyectoDark}`}>
              <div className={`${styles.proyectoImagen} ${temaClaro ? '' : styles.proyectoImagenDark}`}>
                {index === 0 && (
                  <img className={`${styles.ImgProject} ${temaClaro ? '' : styles.ImgProjectDark}`} src={PatitasSinHogarFoto} alt="PatitasSinHogarFoto" />
                )}
                {index === 1 && (
                  <img className={`${styles.ImgProject} ${temaClaro ? '' : styles.ImgProjectDark}`} src={PortalDistFoto} alt="PortalDistFoto" />
                )}
                {index === 2 && (
                  <img className={`${styles.ImgProject} ${temaClaro ? '' : styles.ImgProjectDark}`} src={PiDogsHenry} alt="PiDogsHenry" />
                )}
              <div className={`${styles.tecnologias} ${temaClaro ? '' : styles.tecnologiasDark}`}>
                  {proyecto.tecnologias.map((tecnologia, i) => (
                    <span key={i}>{tecnologia}</span>
                  ))}
              </div>
              </div>
              <div className={`${styles.proyectoInfo} ${temaClaro ? '' : styles.proyectoInfoDark}`}>
                
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                
                <div className={`${styles.botonContainer} ${temaClaro ? '' : styles.botonContainerDark}`}>
                 {proyecto.repositorio && proyecto.deploy ? (
                  <>
                  <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className={`${styles.Botonlink} ${temaClaro ? '' : styles.BotonlinkDark}`}>
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </a>
                  <a href={proyecto.deploy} target="_blank" rel="noopener noreferrer" className={`${styles.Botonlink} ${temaClaro ? '' : styles.BotonlinkDark}`}>
                  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                    ></path>
                  </svg>
                  </a>
                  </>
                  ) : proyecto.repositorio ? (
                    <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className={`${styles.Botonlink} ${temaClaro ? '' : styles.BotonlinkDark}`}>
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </a>
                  ) : proyecto.deploy ? (
                    <a href={proyecto.deploy} target="_blank" rel="noopener noreferrer" className={`${styles.Botonlink} ${temaClaro ? '' : styles.BotonlinkDark}`}>
                  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                    ></path>
                  </svg>
                  </a>
                  ) : null
                }
                </div>
              </div>
            </div>
          ))}
        </div>
          <button className={`${styles.verMasButton} ${temaClaro ? '' : styles.verMasButtonDark}`} onClick={mostrarMasProyectos}>
            {mostrarTodos ? (idioma === 'ES' ? "VER MENOS" : "SEE LESS") : (idioma === 'ES' ? "VER MÁS" : "SEE MORE")}
          </button>
      </motion.div>
    </div>
  );
}

export default Projects;