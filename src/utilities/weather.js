const request = require("postman-request");

const getWeather = (lat, lon, callBack)=>{
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=78c8c17ce196e2ba3fe0f9dd3fb73668&units=metric`;

     request({url: url, json:true}, (error, response)=>{

        if(error){
            return console.log("The weather not available");
        }
         return callBack(response);
     })

}

module.exports = getWeather;