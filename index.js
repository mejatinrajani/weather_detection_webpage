const apikey = "7e000eb95d7395a67d12ac97461d26eb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        alert("Inavlid Input, Try Again!");
        document.querySelector(".card").style.background = "linear-gradient(135deg ,#F5F5F5, #000000,#808080)";
        document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #808080";
        document.querySelector(".card2").style.background = "linear-gradient(135deg ,#F5F5F5, #000000,#808080)";
        document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #808080";
        document.querySelector(".card3").style.background = "linear-gradient(135deg ,#F5F5F5, #000000,#808080)";
        document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #808080";
        document.querySelector(".details2").style.display = "none";
        document.querySelector(".text_3").style.display = "none";
        document.querySelector(".sugg1").style.display = "none";
        document.querySelector(".sugg2").style.display = "none";
        document.querySelector(".sugg3").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "clear.png";
            document.querySelector(".card").style.background = "linear-gradient(135deg ,#87CEEB, #00008B, #FFD700)";
            document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #00008B";
            document.querySelector(".card2").style.background = "linear-gradient(135deg ,#87CEEB, #00008B, #FFD700)";
            document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #00008B";
            document.querySelector(".card3").style.background = "linear-gradient(135deg ,#87CEEB, #00008B, #FFD700)";
            document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #00008B";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "rain.png";
            document.querySelector(".card").style.background = "linear-gradient(135deg ,#D3D3D3, #2F4F4F, #FFFFFF)";
            document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
            document.querySelector(".card2").style.background = "linear-gradient(135deg ,#D3D3D3, #2F4F4F, #FFFFFF)";
            document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
            document.querySelector(".card3").style.background = "linear-gradient(135deg ,#D3D3D3, #2F4F4F, #FFFFFF)";
            document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "drizzle.png";
            document.querySelector(".card").style.background = "linear-gradient(135deg ,#2F4F4F,#FFFFE0,#7DF9FF)";
            document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #7DF9FF";
            document.querySelector(".card2").style.background = "linear-gradient(135deg ,#2F4F4F,#FFFFE0,#7DF9FF)";
            document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #7DF9FF";
            document.querySelector(".card3").style.background = "linear-gradient(135deg ,#2F4F4F,#FFFFE0,#7DF9FF)";
            document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #7DF9FF";
        }
        else if(data.weather[0].main == "Snow"){
            weathericon.src = "snow.png";
            document.querySelector(".card").style.background = "linear-gradient(135deg ,#F0F8FF, #483D8B , #FFFFFF)";
            document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
            document.querySelector(".card2").style.background = "linear-gradient(135deg ,#F0F8FF, #483D8B , #FFFFFF)";
            document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
            document.querySelector(".card3").style.background = "linear-gradient(135deg ,#F0F8FF, #483D8B , #FFFFFF)";
            document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #FFFFFF";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "mist.png";
            document.querySelector(".card").style.background = "linear-gradient(135deg ,#DCDCDC, #696969 , #808080)";
            document.querySelector(".card").style.boxShadow = "200px 110px 15px -20px  #808080";
            document.querySelector(".card2").style.background = "linear-gradient(135deg ,#DCDCDC, #696969 , #808080)";
            document.querySelector(".card2").style.boxShadow = "200px 110px 15px -20px  #808080";
            document.querySelector(".card3").style.background = "linear-gradient(135deg ,#DCDCDC, #696969 , #808080)";
            document.querySelector(".card3").style.boxShadow = "200px 110px 15px -20px  #808080";
        }

        //new if else blocks 

        if(data.weather[0].description == 'clear sky' || 'Fair'){
            document.querySelector(".sugg1").innerHTML = "1. The sky outside is clear, You can put the clothes in the blacony. Can go outside without Umbrella Apply sunscreen, it may be hot outside.";//ghommi
        }
        else if(data.weather[0].description == 'Partly Cloudy' || 'Mostly Cloudy' || 'Overcast' ||  'Scattered Clouds' || 'Thin Clouds'){
            document.querySelector(".sugg1").innerHTML = "2. It's Cloudy outside, very less sunlight is there, mostly chances are that rain will not happen, if it came by any chance then it would not be that dense. Can go for a family ride. Can spend time in park with children. Can spend time in balcony.";//ghoomi ghomi
        }
        else if(data.weather[0].description == 'Dark Clouds' || 'Storm Clouds'){
            document.querySelector(".sugg1").innerHTML = "Dark Clouds are outside, it is preferred to not to go outside until and unless it is a case of emergency, rain can drop anytime. There's a heavy chances of rain or stormy winds, don't fprget to keep the umbrella if you go outside. Don't let the children to go outside and play.";//baarisih ka mausam
        }
        else if(data.weather[0].description == 'Light Rain' || 'Showers' || 'Drizzle'){
            document.querySelector(".sugg1").innerHTML = "There's some sweet rain outside. Try to enjoy with your family from the balcony with some pakodas and tikkas. Don't recommend to go outside. Keep an eye on the light, it may go, keep the water filled in tanks and save the electricity.";//thodi thodi baarsih
        }
        else if(data.weather[0].description == 'Thunderstorms' || 'Heavy Rain'){
            document.querySelector(".sugg1").innerHTML = "There are heavy thunderstorms outside, close all the doors and the windows, remove the clothes from the balcony and don't let anyone go outside it may be dangerous for them.";//thodi thodi baarsih
        }
        
        else if(data.weather[0].description == 'Stormy' || 'Gusty' || 'Windy'){
            document.querySelector(".sugg1").innerHTML = "There's a situation of stormy winds don't get outside, remove the clothes from the balcony, keep an eye on the electricity, store the water in the tanks and save the electricity.";//aandhi
        }
        
        else if(data.weather[0].description == 'Mist' || 'Fog' || 'Haze'){
            document.querySelector(".sugg1").innerHTML = "There's fog outside, it is cold, wait for daytime to go outside in the sunlight. If you're going outside somewhere have a check on the fog lamps of your car, wear proper clothes, take care of children and make them wear sweaters and jackets.";//thodi thodi baarsih
        }
        
        else if(data.weather[0].description == 'Hail' || 'Blizzard' || 'Sleet' || 'Snow Showers'){
            document.querySelector(".sugg1").innerHTML = "There's too cold outside. Blow a blower in your room and stay in room only. It's too cold outside.";//thodi thodi baarsih
        }
        
        
        // new if else blocks

        if(data.main.temp <= 0){
            document.querySelector(".sugg2").innerHTML = "2. It's freezing cold today! Don't forget to wear warm clothes.";
            document.querySelector(".sugg3").innerHTML = "3. Wear multiple layers of clothing, including a sweater or jacket.";
        }
        else if(0<data.main.temp && data.main.temp<=5){
            document.querySelector(".sugg2").innerHTML = "2. Brrr, it's so chilly! Make sure to cover yourself well.";
            document.querySelector(".sugg3").innerHTML = "3. Wear warm clothing like sweaters, shawls, or jackets.";
        }
        else if(5<data.main.temp && data.main.temp<=15){
            document.querySelector(".sugg2").innerHTML = "2. It's quite cold today, better wear a sweater or a jacket.";
            document.querySelector(".sugg3").innerHTML = "3. Use blankets or quilts to keep warm, especially at night.";
        }
        else if(15<data.main.temp && data.main.temp<=25){
            document.querySelector(".sugg2").innerHTML = "2. The weather is just perfect today, not too hot, not too cold.";
            document.querySelector(".sugg3").innerHTML = "3. Wear light-colored, loose-fitting clothes to stay cool.";
        }
        else if(25<data.main.temp && data.main.temp<=35){
            document.querySelector(".sugg2").innerHTML = "2. It's quite warm today, better stay hydrated.";
            document.querySelector(".sugg3").innerHTML = "3. Avoid direct exposure to the sun during peak hours (10 AM to 4 PM).";
        }
        else if(35<data.main.temp && data.main.temp<=45){
            document.querySelector(".sugg2").innerHTML = "2. It's so hot, make sure to use an umbrella or wear a hat.";
            document.querySelector(".sugg3").innerHTML = "3. Avoid strenuous outdoor activities, especially during peak heat hours.";
        }
        else if(45<data.main.temp && data.main.temp<=60){
            document.querySelector(".sugg2").innerHTML = "2. It's a heatwave today. Drink plenty of water and avoid outdoor activities";
            document.querySelector(".sugg3").innerHTML = "3. It's extremely hot. Wear light-colored, loose-fitting clothes.";
        }

        document.querySelector(".weather").style.display = "block";
        
        //for the second card :

        document.querySelector(".feelslike").innerHTML = "Feels Like : "  + data.main.feels_like + "°C";
        document.querySelector(".temp_max").innerHTML = "Max. temp. : " + data.main.temp_max + "°C";
        document.querySelector(".temp_min").innerHTML = "Min. temp. : " + data.main.temp_min + "°C";
        document.querySelector(".actualtemp").innerHTML = "Actual temp. : " + data.main.temp + "°C";
        document.querySelector(".cityy").innerHTML = "Place : " + data.name;
        document.querySelector(".description").innerHTML = "Description : " + data.weather[0].description;
        
        //telling the display to be absolute

        document.querySelector(".details2").style.display = "block";
        document.querySelector(".text_3").style.display = "block";
        document.querySelector(".sugg1").style.display = "block";
        document.querySelector(".sugg2").style.display = "block";
        document.querySelector(".sugg3").style.display = "block";
    }

}

searchbutton.addEventListener("click" , ()=>{
    checkweather(searchbox.value);
})
searchbox.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter"){
        checkweather(searchbox.value);
    }
})
