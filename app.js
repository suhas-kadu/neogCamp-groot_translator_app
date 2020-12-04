var url = 'https://api.funtranslations.com/translate/groot.json';

button1 = document.querySelector("#translate-btn")
textInput = document.querySelector(".text-input")
output = document.querySelector(".text-output")

const getTranslatedUrl = (input) => {
  return url + "?" + "text=" + input;
}

const catchError = (e) => {
  console.log(e);
  alert("Something went wrong with the server")
}

const clickHandler = () => {
  var plainText = textInput.value;
  fetch(getTranslatedUrl(plainText)).then(response => response.json()).then(json => {
    var translatedText = json.contents.translated;
    output.innerText = translatedText;
  }).catch(catchError);

}

button1.addEventListener("click",clickHandler)