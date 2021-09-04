const copy = async () => {
  let text = document.querySelector("#password").value
  await navigator.clipboard.writeText(text)
  console.log("Copiado.")
}

document.getElementById("copy").addEventListener("click", copy)

const generate = () => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()_+?{}[]"
  const passwordLength = 16
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("password").value = password
  console.log("Gerado.")
}
