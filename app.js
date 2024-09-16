


let url = "https://api.weatherapi.com/v1/current.json?key=d0f143115c3546d095590925242206&q=";

let searchInput = document.querySelector("input");
let searchBtn = document.querySelector("button");
let weatherIcon = document.querySelector(".weather-icon");

function weather(city) {

    fetch(url + city )
    .then( (res)=> {
        
        if(res.status == 400 ){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            res.json().then( (data)=> {
                document.querySelector(".weather-icon").src = data.current.condition.icon;
                document.querySelector(".temp").innerHTML = data.current.temp_c + "°c" ;
                document.querySelector(".cityName").innerHTML = data.location.name ;
                document.querySelector(".region").innerHTML = data.location.region ;
                document.querySelector(".humidity").innerHTML = data.current.humidity + "%" ;
                document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";
    
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            })
        }
    })
}

searchBtn.addEventListener("click", ()=> {
    weather(searchInput.value);
    searchInput.value = "";
})

