function doSomething() {
  let pObj = document.createElement("p");
  pObj.textContent = "This paragraph has been dynamically created.";
  pObj.style.color = "red";
  pObj.style.fontSize = "1.5rem";
  pObj.style.backgroundColor = "yellow";
  pObj.style.padding = "16px";
  let container = document.querySelector(".container");
  container.appendChild(pObj);
}

//                                  css selectors
let btnObj = document.querySelector("#clickMe");
console.dir(btnObj);

// btnObj.onclick = doSomething;

btnObj.addEventListener("click", doSomething);
// btnObj.addEventListener("click", againDoSomething);
