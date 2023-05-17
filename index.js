function clickFunction() {
  let name = "caboclo";
  window.alert(`Você clicou aqui, ${name} !`);
}

function changeText() {
  let text = "é nozes!";
  let oldText = "Texto";
  let span = document.getElementById("texto");

  if (span.innerText == "Texto") {
    return (span.innerText = text);
  }

  if (span.innerText == "é nozes!") {
    return (span.innerText = oldText);
  }
}
