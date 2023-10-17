import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion';
import styles from "./Contact.module.css";
import { clearAux, Emails } from "../../Redux/actions";


function Contacto() {
  const dispatch = useDispatch()
  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Emails(input.name, input.email, input.message));
    setInput({
      name: "",
      email: "",
      message: ""
    });
  };


  const handleReset = () => {
    setInput({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div id="contacto" className={`${styles.containerLight} ${temaClaro ? '' : styles.containerDark}`}>
      <motion.div className={styles.dataContainer}>

        <div className={`${styles.title} ${temaClaro ? '' : styles.titleDark}`}>
          {idioma === 'ES' && <h2>CONTACTO</h2>}
          {idioma === 'EN' && <h2>CONTACT</h2>}
        </div>

        <div className={`${styles.formContainer} ${temaClaro ? '' : styles.formContainerDark}`}>
            <div className={styles.form}>
                <span className={styles.heading}>
                  {idioma === 'ES' ? "Ponte en contacto" : "Get in touch"}
                </span>
                <input placeholder={idioma === 'ES' ? "Nombre" : "Name"} type="text" className={styles.input} name="name" value={input.name} onChange={handleChange}/>
                <input placeholder={idioma === 'ES' ? "Correo electrónico" : "Email"} id="mail" type="email" className={styles.input} name="email" value={input.email} onChange={handleChange}/>
                <textarea placeholder={idioma === 'ES' ? "Saluda" : "Say Hello"} rows="10" cols="30" id="message" name="message" className={styles.textarea} value={input.message} onChange={handleChange}>
                </textarea>
                
                <div className={styles.buttonContainer}>
                    <div className={styles.espacio}></div>

                    <div className={styles.sendButton} onClick={handleSubmit}>
                        {idioma === 'ES' ? "Enviar" : "Send"}
                    </div>
                    <div className={styles.resetButtonContainer}>
                    <div id="reset-btn" className={styles.resetButton} onClick={handleReset}>
                        {idioma === 'ES' ? "Restablecer" : "Reset"}
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacto;
