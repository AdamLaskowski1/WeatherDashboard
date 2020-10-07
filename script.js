var apiKey = "41c50396d92d9ae4cf27f26dc53f4b42"

var button = document.querySelector("#searchButton")
var inputValue = document.querySelector("#searchButton")
var name = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector(".temp")

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=41c50396d92d9ae4cf27f26dc53f4b42')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Wrong city name"))
})
