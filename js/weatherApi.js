let fetchWeatherApi = async (latitude,longitude) => {
    try{
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=f4ec451fe31f40e4b089cd83847be1ed}`);
        let data = await response.json();
        console.log(data);
    } catch(error){
        console.error(error);
    }
};

function success(pos) {
  let crd = pos.coords;
  console.log(crd);
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  fetchWeatherApi(crd.latitude,crd.longitude)
}

function error(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}

export default function getWeatherDate() {
  window.addEventListener("load", () => {
    
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(success, error);  
    } else{
        console.log("error");
    }
  });
}
