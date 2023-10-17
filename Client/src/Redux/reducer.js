import { CAMBIO_IDIOMA, CAMBIO_TEMA, EMAILS, CLEAR_AUX } from "./actions";

let initialState = {
  isEnglish: false,
  idioma: "ES",
  temaClaro: true,
  ContactState: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CAMBIO_IDIOMA:
      return {
        ...state,
        isEnglish: !state.isEnglish,
        idioma: state.isEnglish ? "ES" : "EN",
      };
    case CAMBIO_TEMA:
      return {
        ...state,
        temaClaro: !state.temaClaro,
      };
    case EMAILS: {
      return {
        ...state,
        ContactState: action.payload,
      };
    }
    case CLEAR_AUX: {
      return {
        ...state,
        ContactState: "",
      };
    }
    default:
      return state;
  }
}