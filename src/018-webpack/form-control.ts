import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGE = "show-error-message";

const form = document.querySelector("#form") as HTMLFormElement;
const username = document.querySelector("#username") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;
const passwordConfirmation = document.querySelector(
  "#password2"
) as HTMLInputElement;

form.addEventListener("submit", function (event: SubmitEvent): void {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, passwordConfirmation);
  checkEmail(email);
  validatePasswords(password, passwordConfirmation);
  if (validateForm(this)) console.log("Enviado");
});

const validatePasswords = (
  password: HTMLInputElement,
  passwordConfirmation: HTMLInputElement
): void => {
  if (password.value !== passwordConfirmation.value)
    showErrorMessages(passwordConfirmation, "Senhas não batem");
};

const hideErrorMessages = (form: HTMLFormElement): void => {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGE}`)
    .forEach((input) => input.classList.remove(SHOW_ERROR_MESSAGE));
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessages(input, "E-mail inválido");
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessages(input, "Campo não pode estar vazio");
  });
};

const showErrorMessages = (input: HTMLInputElement, msg: string): void => {
  const errorSpan = input.parentElement?.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  const parentDiv = errorSpan.parentElement as HTMLDivElement;
  errorSpan.innerText = msg;
  parentDiv.classList.add(SHOW_ERROR_MESSAGE);
};

const validateForm = (form: HTMLFormElement): boolean => {
  let send = true;
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(() => (send = false));
  return send;
};
