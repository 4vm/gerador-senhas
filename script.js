const input = document.querySelector("form__input")

const copy = () => {}

const generate = () => {
  let characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()_+?{}[]"
  const passwordLength = 16
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("password").value = password
  console.log("Gerado!!")
}
