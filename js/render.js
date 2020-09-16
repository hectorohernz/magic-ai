import createElement from "./createElements.js";

// API Objects

// Providing weather object
import getCurrentWeather from "./weatherApi.js";

// Providing the local Time and Date
import getCurrentDate from "./date.js";

// Fetching users current date
const date = getCurrentDate();

function renderDateToUi() {
  const headerElement = document.getElementById("Ui-header");
  const dateDomElement = document.createElement("section");
  dateDomElement.setAttribute("id", "date__container");
  headerElement.appendChild(dateDomElement);

  let dateString = `${date.currentMonth} ${date.currentDayOfMonth} ${date.currentYear}`;
  createElement(
    "h2",
    dateDomElement,
    date.currentDayOfWeek,
    "class",
    "date__current-day"
  );
  createElement("p", dateDomElement, date.currentTime, "class", "date__current-time");
  createElement("h3", dateDomElement, dateString);
}

const renderWeatherToUi = async () => {

  // returns a promise
  const weather = await getCurrentWeather().then((data) => {
   return data
  }); 
  console.log(weather);

  const headerElement = document.getElementById("Ui-header");
  const weatherSectionElement = document.createElement("section");
  weatherSectionElement.setAttribute("id", "weather-container");
  headerElement.appendChild(weatherSectionElement);

  createElement('p',weatherSectionElement, weather.city_name, 'class','weather__city' )
  createElement('p',weatherSectionElement, weather.app_temp, 'class','weather__temp' )

};

renderDateToUi();
renderWeatherToUi();