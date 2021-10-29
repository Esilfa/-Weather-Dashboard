
var searchButton = $(".searchButton");
var searchInput = $(".searchInput").value;
var apiKey = "441eb7c2ef6bb00fa5b1c2c8811d5bd7";

        
// Append cities to to the local storege. 

searchButton.click(function () {
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey;
    var cities = [];
    function init() {
        var storedCities = JSON.parse(localStorage.getItem("serchImput"));
        for (var i = 0; i < localStorage.length; i++) {
            $('list-group').append(localStorage.getItem(localStorage.searchInput(i)));

            localStorage.setItem("searchInput", JSON.stringify(cities));
        }
        if (storedCities !== null) {
            cities = storedCities;
        };
        then(function (response) {

            var cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.city + "</li>");
        })


       
    };



})

  

// var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
// // 5 day forecast working
// var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";

