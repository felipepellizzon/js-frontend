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

function applyClass() {
  let main_div = document.getElementById("main_div");
  let new_title = document.getElementById("title");
  let new_sub_title = document.getElementById("sub-title");
  let new_span = document.querySelectorAll("span");

  main_div.classList.add("new-main");
  new_title.classList.add("new-title");
  new_sub_title.classList.add("new-sub-title");
  new_span.forEach((el) => {
    console.log("aoba");
    el.classList.add("new-span");
  });
}

function appearCard() {
  let element = document.getElementById("card");
  let span = document.getElementById("span_card");

  span.style.visibility = "hidden";

  element.style.visibility = "visible";
}
