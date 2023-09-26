let menuBox = document.getElementById("menuBox"); // Change to "menuBox" (capital B)
let menuIcon = document.getElementById("menuIcon"); // Change to "menuIcon" (capital I)

menuIcon.onclick = function () {
    menuBox.classList.toggle("open-menu"); // Change to "menuBox" (capital B)

    if (menuBox.classList.contains("open-menu")) {
        menuIcon.src = "img/close.png";
    } else {
        menuIcon.src = "img/menu.png";
    }
}