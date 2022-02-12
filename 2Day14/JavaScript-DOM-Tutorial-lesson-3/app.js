var title = document.getElementsByClassName("title");

console.log(Array.isArray(Array.from(title)));

var book = document.querySelectorAll("#book-list li .name");
Array.from(book).forEach(function (book) {
  console.log(book);
});