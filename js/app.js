const $input = document.querySelector(".input");
const $btn = document.getElementById("btn-form");
const $labelError = document.getElementById("label-error");

function subscribe() {
  $labelError.classList.remove("active-label");
  $input.classList.remove("error-input");
  alert("successfully subscribed");
}

function sendError() {
  $labelError.classList.add("active-label");
  $input.classList.add("error-input");
}

function validarEmail() {
  const email = $input.value;
  if (email === "") {
    sendError();
  } else {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? subscribe()
      : sendError();
  }
}

$btn.addEventListener("click", function () {
  validarEmail();
});
