let ul = document.createElement("ul");
ul.setAttribute("id", "list");
document.body.appendChild(ul);

let txtName = document.querySelector("#name");
let txtAddress = document.querySelector("#address");
// action elements
let btn = document.querySelector("#saveBtn");
btn.addEventListener("click", save);

function save() {
  let name = txtName.value;
  let address = txtAddress.value;

  let li = document.createElement("li");
  li.textContent = name + " | " + address;
  // li.onclick = listClickHandler;

  let listBtn = document.createElement("button");
  listBtn.textContent = "Delete";
  listBtn.onclick = remove;
  li.appendChild(listBtn);
  ul.appendChild(li);
}

function remove() {
  console.dir(this);
  console.log("list item clicked..");
  this.parentNode.parentNode.removeChild(this.parentNode);
}
