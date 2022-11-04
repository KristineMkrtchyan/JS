
import {goToPage, show} from "../module/module.js"


let slideIndex = 0;

show(slideIndex,"http://localhost:3006/images");


goToPage("homeBtn", "../home/index.html");

goToPage("aboutBtn", "../about/index.html");

goToPage("contactBtn", "../contact/index.html");



isLogined();

function isLogined() {
  if (!localStorage.getItem('token')) {
    location.replace('../page/index.html');
  }
}
function logout() {
    localStorage.removeItem('token');
    window.location.href = '../page/index.html'
  }

document.getElementById("logout").addEventListener("click", logout)


  