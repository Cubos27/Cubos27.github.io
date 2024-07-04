function ShowOrHideMenu() {
  let nav = document.querySelector("nav div");
  if (isMenuOpened) {
    nav.classList.add("hidden");
    isMenuOpened = false;
  } else {
    nav.classList.remove("hidden");
    isMenuOpened = true;
  }
}

const listBtn = document.getElementById("list-btn");
listBtn.addEventListener("click", ShowOrHideMenu);

var isMenuOpened = false;
