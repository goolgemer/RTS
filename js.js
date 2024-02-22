const btn = document.querySelector(".burger-button");
const close_btn = document.querySelector(".close-button");

function scrollToAnchor(anchorId) {
  var targetElement = document.getElementById(anchorId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function modal_opening() {
  const modal = document.querySelector(".modal_menu");
  modal.classList.add("open");
}
function modal_closing() {
  const modal = document.querySelector(".modal_menu");
  modal.classList.remove("open");
}

btn.addEventListener("click", modal_opening);

close_btn.addEventListener("click", modal_closing);
