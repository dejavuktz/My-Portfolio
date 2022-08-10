const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}
/* Tablet menu */
@media all and (min-width: 700px) {
    .menu {
        justify-content: center;
    }
    .logo {
        flex: 1;
    }
    .item.button {
        width: auto;
        order: 1;
        display: block;
    }
    .toggle {
        flex: 1;
        text-align: right;
        order: 2;
    }
    /* Button up from tablet screen */
    .menu li.button a {
        padding: 10px 15px;
        margin: 5px 0;
    }
    .button a {
        background: #0080ff;
        border: 1px royalblue solid;
    }
    .button.secondary {
        border: 0;
    }
    .button.secondary a {
        background: transparent;
        border: 1px #0080ff solid;  
    }
    .button a:hover {
        text-decoration: none;
    }
    .button:not(.secondary) a:hover {
        background: royalblue;
        border-color: darkblue;
    }
}/* Desktop menu */
@media all and (min-width: 960px) {
    .menu {
        align-items: flex-start;     
        flex-wrap: nowrap;
        background: none;
    }
    .logo {
        order: 0;
    }
    .item {
        order: 1;
        position: relative;
        display: block; 
        width: auto;
    }
    .button {
        order: 2;
    }
    .submenu-active .submenu {
        display: block;
        position: absolute;
        left: 0;
        top: 68px;
        background: #111;
    }
    .toggle {
        display: none;
    }
    .submenu-active {
        border-radius: 0;
    }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);