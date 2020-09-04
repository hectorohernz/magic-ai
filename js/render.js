// Providing the local Time and Date
import currentDateFunction from "./date.js";
import createElement from './createElements.js';
import weatherApi from './weatherApi.js';




// Fetching Date Object
const date = currentDateFunction();

function dateDataToUserInterface() {
  console.log(date);
  // Creating a container for the weather user-interface for styling
  // weatherDomElement is the container for weather elements
  // headerElement is the header of the html file
  const headerElement = document.getElementById("Ui-header");
  const dateDomElement = document.createElement("section");
  dateDomElement.setAttribute("id", "weather-container");
  headerElement.appendChild(dateDomElement);

  let dateString = `${date.currentMonth} ${date.currentDayOfMonth} ${date.currentYear}`;  
  createElement("h2", dateDomElement, date.currentDayOfWeek, "class", "weather-day-week");
  createElement("p", dateDomElement, date.currentTime,"class", "weather-");
  createElement("h3",dateDomElement, dateString );
}

dateDataToUserInterface();
weatherApi();