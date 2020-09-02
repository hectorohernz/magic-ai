// Providing the local Time and Date 
import currentDateFunction from "./date.js";
const date = currentDateFunction();

// let header = document.createElement('h1');
// let node = document.createTextNode();
// header.appendChild(node);

// var element = document.getElementById('UI-header');

// element.appendChild(header);


function userDateToUserInterface(){
    let thisIsAHeader = document.getElementById('Ui-header');
    let title = document.createElement('h2');
    let node = document.createTextNode('Magic AI By Hector Hernandez');
    title.appendChild(node);
    thisIsAHeader.appendChild(title);
}

userDateToUserInterface();