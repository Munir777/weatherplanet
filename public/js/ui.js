class UI {
    constructor(){
          this.cloud = document.querySelector(".cloud");
          this.icon = document.querySelector(".icon");
          this.temp = document.querySelector(".temp");
          this.temp_max = document.querySelector(".temp-max");
          this.temp_min = document.querySelector(".temp-min");
          this.feels = document.querySelector(".feels");
          this.humidity = document.querySelector(".humidity");
          this.vis = document.querySelector(".vis");
          this.windDir = document.querySelector(".windDir");
          this.windspeed = document.querySelector(".windspeed");
          this.sunrise = document.querySelector(".sunrise");
          this.sunset = document.querySelector(".sunset");
          this.country = document.querySelector(".country");
          this.locName = document.querySelector(".locName");

          //The bottom box slideer
          this.bottomBox = document.querySelector(".bottom-box");
    }

    buildUI(data){
        
        this.cloud.innerHTML = "Weather:" +" "+ data.weather[0].description;
        //this.icon.innerHTML = `<i class="fas fa-cloud-sun"></i>`;
        this.icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon+".png"}">`;
       // this.icon.innerHTML = `http://openweathermap.org/img/wn/${data.weather[0].icon+".png"}`;
        this.temp.innerHTML = "Temperature:" + " " +  data.main.temp;
        this.temp_max.innerHTML = "High:" + " " +  data.main.temp_max;
        this.temp_min.innerHTML = "Low:" + " " +  data.main.temp_min;
        this.feels.innerHTML = "Feels like:" + " " +  data.main.feels_like;
        this.humidity.innerHTML = "Humidity:" + " " +  data.main.humidity;
        this.vis.innerHTML = "Visibility:" + " " +  data.visibility;
        this.windDir.innerHTML = "Wind direction:" + " " +  data.wind.deg;
        this.windspeed.innerHTML = "Wind speed:" + " " +  data.wind.speed;
        this.sunrise.innerHTML = "Sun rise:" + " " +  data.sys.sunrise;
        this.sunset.innerHTML = "Sun set:" + " " +  data.sys.sunset;
        this.country.innerHTML = "Country:" + " " +  data.sys.country;
        this.locName.innerHTML = "Location name:" + " " +  data.name;

    }

    shoWeather(){
        setTimeout(()=>{
            this.bottomBox.style.display = "block";
        }, 1000);
          
    }


}