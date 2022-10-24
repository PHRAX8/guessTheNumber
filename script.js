let input = document.querySelector('input[name="inputNumber"]');
let popupMenssage = document.querySelector('h2[id="popupMenssage"]');
let inputValue;
let randomNumber;
let retry;

reset = () => {
  randomNumber = Math.floor(Math.random() * 11);
  retry = 1;
}
hideClass = () => {
  document.querySelector(".box").classList.toggle('hide');
  document.querySelector(".result").classList.toggle('hide');
}
trybuttonCall = () => {
  inputValue = Number(input.value);
    if(inputValue == randomNumber){
      hideClass();
      if(retry > 1){
        popupMenssage.textContent = `Acertou em ${retry} tentativas!`;
      }else{
        popupMenssage.textContent = `Acertou em ${retry} tentativa!`;
      }
    }else if(inputValue != randomNumber){
      retry += 1;
    }else{
      console.log("Excessão");
    }
}
returnButtonCall = () => {
  hideClass();
  reset();
}

reset();
document.getElementById("tryButton").addEventListener("click", trybuttonCall);
document.getElementById("returnButton").addEventListener("click", returnButtonCall);