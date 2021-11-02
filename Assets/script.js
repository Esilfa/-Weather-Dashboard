
var searchButton = $('.searchButton');
var apiKey = "9defd3ed051151cc8b9327dd9b348343";
var searchInput = $(".searchInputs").val();

// var currentUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchInput + "&units=imperial" + "&APPID=9defd3ed051151cc8b9327dd9b348343";


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// local storage

var cities = [];
var cityName = $("list-group").addClass("list-group-item");
function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    cityName.append("<li>" + cities + "</li>");
    if (storedCities != null) {
        cities = storedCities;
    }
}

console.log("hello");
// current weather
searchButton.on("click", function () {
    searchInput = $('.searchInputs').val()
    console.log(searchInput);

    localStorage.setItem('cities', JSON.stringify(cities))


    if (searchInput) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial",
            type: "GET",
            dataType: "json",
            success: function (response) {
                console.log(response);
                cityName.append("<li>" + response.name + "</li>");

                var currentCard = $(".currentCard").append("<div>").addClass("card-body");
 

                currentCard.empty();
                var time = new Date(response.dt * 1000);
                // // currentName.append(response.name + " " + time.toLocaleDateString("en-US"));

                var currentName = currentCard.append("<p>");
                currentCard.append(currentName);
                var currentTemp = currentName.append("<p>");
                currentName.append(currentTemp);
                console.log(response.main.temp);
                
                currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
                
                currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");

                currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");

                currentTemp.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");
                

            }


        });


        //     // fiveDay


        var DaysCard = $(".DaysCard").append("<div>").addClass("DaysCard");
        // var day = [0, 8, 16, 24, 32];
        var DaysCard = $(".DaysCard").addClass("card-body");
        var Eachdaydiv = $(".eachday").addClass("card-text");
        Eachdaydiv.empty()

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial",
            type: "GET",
            dataType: "json",
            success: function (response) {
                console.log(response);
                DaysCard.empty();
                var time = new Date(response.dt * 1000);
                // // currentName.append(response.name + " " + time.toLocaleDateString("en-US"));

                var Days = Eachdaydiv.append("<p>");
                Eachdaydiv.append(Days);
                var fivedaytem = Days.append("<p>");
                Days.append(fivedaytem );
                // console.log(response.main.temp);
                fivedaytem.append("<p>" + "Temperature: " + response.list[i].main.temp + "</p>");

                fivedaytem.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");

                fivedaytem.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");

            }
        


        }
        

    )};
    

});

