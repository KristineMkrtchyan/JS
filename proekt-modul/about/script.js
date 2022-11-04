import {goToPage, show} from "../module/module.js"

let index = 0;
    
show(index,"http://localhost:3006/imagesAbout");


goToPage("homeBtn", "../home/index.html");

goToPage("aboutBtn", "../about/index.html");

goToPage("contactBtn", "../contact/index.html");