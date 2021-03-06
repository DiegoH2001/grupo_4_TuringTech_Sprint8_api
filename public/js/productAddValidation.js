const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  productName: /^[a-zA-ZÀ-ÿ\s0-9]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  productDescription: /^[a-zA-ZÀ-ÿ0-9\s]{5,20}$/, //  Letras y espacios, pueden llevar acentos, igual que productName
  productDescriptionLong: /^[a-zA-ZÀ-ÿ0-9\s]{10,40}$/, //  Letras y espacios, pueden llevar acentos, igual que productName pero mayor cantidad de carecteres.
  productPrice: /^\d{2,14}$/, // 2 a 14 numeros
  productStock: /^\d{1,14}$/, // 1 a 14 numeros
  productFees: /^\d{1,12}$/, // 0 a 12 numeros
};

const campos = {
  productName: false,
  productDescription: false,
  productDescriptionLong: false,
  productPrice: false,
  productStock: false,
  productFees: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "productName":
      if (expresiones.productName.test(e.target.value)) {
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        document
          .getElementById("productName")
          .classList.add("borde_correcto_activo");
        document
          .getElementById("productName")
          .classList.remove("borde_incorrecto_activo");
        campos["productName"] = true;
      } else {
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        document
          .getElementById("productName")
          .classList.add("borde_incorrecto_activo");
        document
          .getElementById("productName")
          .classList.remove("border_correcto_activo");
        campos["productName"] = false;
      }
      break;

    case "productDescription":
      if (expresiones.productDescription.test(e.target.value)) {
        document
          .querySelector("#grupo__descripcion .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        document
          .getElementById("productDescription")
          .classList.add("borde_correcto_activo");
        document
          .getElementById("productDescription")
          .classList.remove("borde_incorrecto_activo");
        campos["productDescription"] = true;
      } else {
        document
          .querySelector("#grupo__descripcion .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        document
          .getElementById("productDescription")
          .classList.add("borde_incorrecto_activo");
        document
          .getElementById("productDescription")
          .classList.remove("border_correcto_activo");
        campos["productDescription"] = false;
      }
      break;

    case "productDescriptionLong":
      if (expresiones.productDescriptionLong.test(e.target.value)) {
        document
          .querySelector("#grupo__descripcionLong .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        document
          .getElementById("productDescriptionLong")
          .classList.add("borde_correcto_activo");
        document
          .getElementById("productDescriptionLong")
          .classList.remove("borde_incorrecto_activo");
        campos["productDescriptionLong"] = true;
      } else {
        document
          .querySelector("#grupo__descripcionLong .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        document
          .getElementById("productDescriptionLong")
          .classList.add("borde_incorrecto_activo");
        document
          .getElementById("productDescriptionLong")
          .classList.remove("border_correcto_activo");
        campos["productDescriptionLong"] = false;
      }
      break;

    /* *case "productPrice":
      if (expresiones.productPrice.test(e.target.value)) {
        document
          .querySelector("#grupo__productPrice .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        campos["productPrice"] = true;
      } else {
        document
          .querySelector("#grupo__productPrice .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        campos["productPrice"] = true;
      }
      break;*/

    case "productStock":
      if (expresiones.productStock.test(e.target.value)) {
        document
          .querySelector("#grupo__productStock .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        document
          .getElementById("productStock")
          .classList.add("borde_correcto_activo");
        document
          .getElementById("productStock")
          .classList.remove("borde_incorrecto_activo");
        campos["productStock"] = true;
      } else {
        document
          .querySelector("#grupo__productStock  .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        document
          .getElementById("productStock")
          .classList.add("borde_incorrecto_activo");
        document
          .getElementById("productStock")
          .classList.remove("border_correcto_activo");
        campos["productStock"] = false;
      }
      break;

    case "productFees":
      if (expresiones.productFees.test(e.target.value)) {
        document
          .querySelector("#grupo__productFees .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
        document
          .getElementById("productFees")
          .classList.add("borde_correcto_activo");
        document
          .getElementById("productFees")
          .classList.remove("borde_incorrecto_activo");
        campos["productFees"] = true;
      } else {
        document
          .querySelector("#grupo__productFees .formulario__input-error")
          .classList.add("formulario__input-error-activo");
        document
          .getElementById("productFees")
          .classList.add("borde_incorrecto_activo");
        document
          .getElementById("productFees")
          .classList.remove("border_correcto_activo");

        campos["productFees"] = false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

//verifica que todo el completado correctamente
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    campos.productName &&
    campos.productDescription &&
    campos.productDescriptionLong &&
    campos.productStock &&
    campos.productFees
  ) {
    formulario.submit();
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje")
        .classList.remove("formulario__mensaje-activo");
    }, 5000);
  }
});
