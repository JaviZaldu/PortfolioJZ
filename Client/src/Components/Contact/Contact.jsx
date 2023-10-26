import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion';
import styles from "./Contact.module.css";
import { clearAux, Emails } from "../../Redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateSpanish, validateEnglish } from "./ContactValidator";

function Contacto() {
  const dispatch = useDispatch()
  const idioma = useSelector((state) => state.idioma);
  const temaClaro = useSelector((state) => state.temaClaro);

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors]= useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
    setErrors(
      idioma === "EN"
        ? 
          validateEnglish({
            ...input,
            [e.target.name]: e.target.value
          })
        : validateSpanish({
          ...input,
          [e.target.name]: e.target.value
        })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!errors.name && !errors.email  && input.name && input.email){
    dispatch(Emails(input.name, input.email, input.message));
    setInput({
      name: "",
      email: "",
      message: ""
    });
    }
    toast.success(idioma === 'ES' ? "He recibido tu mensaje. ¡Gracias!" : "I have received your message. Thank you!", {
      position: "top-center",
      autoClose: 2000,
      onClose:()=>{
        dispatch(clearAux())
      }
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
        <ToastContainer />
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
                {errors.name && <label className={styles.error}>{errors.name}</label>}
                <input placeholder={idioma === 'ES' ? "Correo electrónico" : "Email"} id="mail" type="email" className={styles.input} name="email" value={input.email} onChange={handleChange}/>
                {errors.email && <label className={styles.error}>{errors.email}</label>}
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
