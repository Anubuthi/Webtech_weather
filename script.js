let weather = {
    "apiKey":"5a6cbe778ae793a04b6c12b4e2f3ac0a",
    fetchWeather : function (city) {
        fetch
        (
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey    
        )
            .then((response) => response.json())//store all the response 
            .then((data) => this.displayWeather(data));//logging all the current data for noe b4 display
    },
    displayWeather: function(data) {//add other stuff later based on api
        const {name} = data;
        const{icon,description}= data.weather[0];
        const{temp,humidity}= data.main;
        const{speed}= data.wind;

        
        document.querySelector(".city").innerText = "Weather in : " + name; //since class name =>.city 
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".desp").innerText = description ;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".humidity").innerText ="Humidity : "+humidity;
        document.querySelector(".wind").innerText = "Wind speed : "+ speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};
 document.querySelector(".search button").addEventListener("click",function(){
     weather.search();
 }); 

 document.querySelector("search-bar").addEventListener("keyup", function(event){
     if(event.key =="Enter"){
         weather.search();
     }
});
 
weather.fetchWeather("Bengaluru");