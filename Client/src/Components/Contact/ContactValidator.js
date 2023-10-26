export function validateSpanish(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "Ingresa tu nombre";
    }
  
    if (!input.email) {
      errors.email = "Ingresa tu correo electrónico";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
    ) {
      errors.email = "Correo electrónico inválido";
    }
  
    return errors;
  }

  export function validateEnglish(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "Enter your name";
    }
  
    if (!input.email) {
      errors.email = "Enter your email";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
    ) {
      errors.email = "Invalid email";
    }
  
    return errors;
  }