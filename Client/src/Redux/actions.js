import axios from "axios";

export const CAMBIO_IDIOMA = "CAMBIO_IDIOMA";
export const CAMBIO_TEMA = "CAMBIO_TEMA";
export const EMAILS = "EMAILS";
export const CLEAR_AUX = "CLEAR_AUX";

  export function cambioIDioma() {
    return {
      type: 'CAMBIO_IDIOMA',
    };
  };

  export function cambioTema() { // Nueva acción
    return {
      type: CAMBIO_TEMA,
    };
  }

  export function Emails(name, email, message) {
    return async function (dispatch) {
      try {
        const response = await axios.post("http://localhost:3001/portfolio/email", {
          name,
          email,
          message,
        });
        return dispatch({
          type: EMAILS,
          payload: response.data,
        });
      } catch (error) {
        return error.message;
      }
    };
  }
  
  export function clearAux() {
    return {
      type: CLEAR_AUX,
    };
  }