const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if ((e.target.className = "delete")) {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});
