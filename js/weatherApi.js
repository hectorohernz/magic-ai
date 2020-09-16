import apiToken from "./weatherToken.js";
let API = apiToken();

//  a promise that resolves with geo coordinates
const getPosition = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

// Fetches weatherData from API returns a promise
let getWeatherData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API.weather}&units=I`
    );
    let data = await response.json();
    data = data.data[0];
    return data;
  } catch (error) {
    console.error(error);
  }
};

const gpsLocation = async () => {
  try {
    const geolocationData = await getPosition({ enableHighAccuracy: true });
    const { latitude: lat, longitude: lng } = geolocationData.coords;
    const weatherDataPromise = getWeatherData(lat, lng);
    const [weatherData] = await Promise.all([weatherDataPromise]);

    const {
      city_name,
      app_temp,
      country_code,
      weather: description,
    } = weatherData;

    return {
      city_name,
      app_temp,
      country_code,
      weather: description.description,
    };

  } catch (err) {
    console.log(err);
  }
};

export default gpsLocation;
