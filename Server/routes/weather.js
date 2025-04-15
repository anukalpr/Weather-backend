const express=require("express");
const router=express.Router();
const axios=require("axios");
const dotenv=require("dotenv");
dotenv.config();
router.get('/', async(req,res)=>{
    const city=req.query.city;
    if(!city){
        return res.status(500).json({error:"invalid City"})
    }
    try{
        const apiKey=process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response=await axios.get(url);
        const data=response.data;
        res.json({
            city:data.name,
            temperature:data.main.temp-273.15,
            condition:data.weather[0].description,
            icon:data.weather[0].icon,
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            Pressure:data.main.pressure,
            sunRise: new Date(data.sys.sunrise * 1000).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            sunSet: new Date(data.sys.sunset * 1000).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            currTime: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            visibility:data.visibility/1000,
        });
    }
    catch(err){
        res.status(500).json({
            error:"Failed to fetch weather data",
        });
    }
})
module.exports=router;