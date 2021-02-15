const request = require("postman-request");

const geoLoc = (address, callBack)=>{
    const coord = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXVuaXI3NzciLCJhIjoiY2trMnZodml4MTU2ZTJvcHB5OXRuNjd1ZCJ9.RP3KaARZDoN5-Viwpslwhw&limit=1`;

    request({url:coord, json:true}, (error, response)=>{
                if(error){
                    callBack("The location you are looking doesn't exist")
                }else{
                    callBack(response);
                }
    })
}



module.exports = geoLoc;