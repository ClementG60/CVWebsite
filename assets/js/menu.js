function menuBurger() {
    if (navBar.className === "navBar") {
        navBar.className += " responsive";
    } else {
        navBar.className = "navBar";
    }
}

