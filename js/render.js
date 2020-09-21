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
    ["class"],
    ["date__current-day"]
  );
  createElement("p", dateDomElement, date.currentTime, ["class"], ["date__current-time"]);
  createElement("h3", dateDomElement, dateString);
}

const returnWeatherCode = (code) => {
   if(code >= 200 && code <= 233){ // ThunderStorms Status
   return "assets/rain.png";

   } else if(code >= 300 && code <= 522){ // Rain 
    return  "assets/rain.png";
   

   } else if(code >= 600 && code <= 623){ // Snow 
    return "assets/snow.png";
    

   } else if (code >= 711 && code <= 751){ // Fog 
    return  "assets/cloudy.png";
   

   } else if (code >= 801 && code <= 804){  // Clouds
    return "assets/cloudy.png";
  

   } else if (code === 800){ // Sunny
    return "assets/clear-day-sun.png";
    

   } else{ // Not currenlty Working 
    return "assets/clear-night.png";
   }
}


const renderWeatherToUi = async () => {
  // returns a promise
  const weather = await getCurrentWeather().then((data) => {
   return data
  }); 
  
  console.log(weather);

  const  { code } = weather.weather;
  const headerElement = document.getElementById("Ui-header");
  const weatherSectionElement = document.createElement("section");
  weatherSectionElement.setAttribute("id", "weather-container");
  headerElement.appendChild(weatherSectionElement);

  createElement('p',weatherSectionElement, weather.city_name, ['class'],['weather__city'] );
  createElement('p',weatherSectionElement, weather.app_temp, ['class'],['weather__temp'] );
  createElement('p',weatherSectionElement, weather.weather.description, ['class'],['weather__desc'] );
  createElement('img',weatherSectionElement, 'NOTTEXT', ['class', 'src', 'style'],['weather__icon', returnWeatherCode(code), ' filter: invert(100%)'] );


};

renderDateToUi();
renderWeatherToUi();