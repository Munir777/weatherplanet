
const ui = new UI();
const wD = new weatherData();
const form = document.querySelector("form");
const inputLocation = document.getElementById("location");



form.addEventListener("submit", (e)=>{

    const cityInput = inputLocation.value;

    if(cityInput === ""){
        return console.log("Enter a city to get weather");
    }else{
         wD.getWeather(cityInput);
         ui.shoWeather();

    
    }




    e.preventDefault();
})