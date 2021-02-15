class weatherData{
   

    getWeather(city){

        fetch(`http://localhost:3000/weather?city=${city}`)
        .then(res=> res.json())
        .then(data=> {
           ui.buildUI(data);
        })
    }

}