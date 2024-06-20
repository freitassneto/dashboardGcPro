document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("li");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      listItems.forEach(function (li) {
        li.classList.remove("clicked");
      });
      this.classList.add("clicked");
    });
  });
});
