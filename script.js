const menuIcon = document.getElementById("list");
const menulist = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menulist.classList.toggle("hidden");
});