const express = require("express");
const hbs = require("hbs");
const path = require("path");
const getWeather = require("./utilities/weather.js");
const geoLoc = require("./utilities/geoloc.js");
const fs = require("fs");

const pathViews = path.join(__dirname, "../templates/views");
const patialPaths = path.join(__dirname, "../templates/partials");
const publicDirectoryPath = path.join(__dirname, "../public")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");
app.set("views", pathViews);
hbs.registerPartials(patialPaths);


app.get("", (req, res)=>{
    res.render("index", {
        render: "this page has been rendered!"
    })
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/help", (req, res)=>{
    res.render("help")
})

app.get("/weather", (req, res)=>{

      geoLoc(req.query.city, data=>{
          const coord = {
                lon: data.body.features[0].center[1],
                lat: data.body.features[0].center[0]
          }

          const {lon = -79.4163, lat = 43.7001} = coord
        getWeather(lon, lat, (resData)=>{
            return res.send(resData.body)
        })
      })


    console.log(req.query)
    //geoLoc()
})

app.listen(port, ()=>{
    console.log("Your server is Up and running perfectly")
})
