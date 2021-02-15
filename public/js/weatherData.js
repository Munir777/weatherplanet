class weatherData{
   

    getWeather(city){

        fetch(`/weather?city=${city}`)
        .then(res=> res.json())
        .then(data=> {
           ui.buildUI(data);
        })
    }

}