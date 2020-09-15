// Providing the local Time and Date
import currentDate from "./date.js";
import createElement from './createElements.js';
import weatherApi from './weatherApi.js';

// Fetching Date Object
const date = currentDate();

function dateDataToUserInterface() {
  
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