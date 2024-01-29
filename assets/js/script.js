/* 
    Javascript for Challenge 08 
    Developer - Steve Hannay 
    First Created - 27th January 2024

    This code handles logic for the Weather Dashboard

*/


// Define Variables and Event Listeners
// ------------------------------------

// create references to html elements


// Event Listeners

// - Main "Search" button "click" event
$("#search-button").on('click', function(event){
    
    event.preventDefault()

    // get the City name typed by the user and search for its weather
    var userInput = $("#search-input").val().trim()
    if (userInput === "") {
        alert("Please enter a City name")
    }
    else {
        // Search for the Cities weather, Display Results and create a Button in the search "History" section 
        performWeatherSearch(userInput)
    }
 
})



// MAIN Logic
// ----------

// Search for a Cities weather, Display Results and create a Button in the search "History" section 
function performWeatherSearch(cityName){

    // Declare variables and initialise
    var apiURL_GeoCordinatesByLocationName = "http://api.openweathermap.org/geo/1.0/direct?"
    var apiURL_TodaysWeatherByCityName = "https://api.openweathermap.org/data/2.5/weather?"
    var apiURL_5DayForecastByCityName = "https://api.openweathermap.org/data/2.5/forecast?"

    var apiKey = "bacc1eea38f464a624c0b32d6374373c"     // OpenWeatherMap key
    
    var iconURL = "https://openweathermap.org/img/w/"   // For displaying icons in an image

    var queryURL = ""
    var cityLatitude = "" 
    var cityLongtitude = ""

    var todaysDateUKFormatted = dayjs().format("D/M/YYYY")


    console.log("**** NEW SEARCH FOR WEATHER IN '" + cityName + "' ****")


    // API CALL 1 - Get Geocordinates for the selected City 
    // note : other API calls are nested within this one, as we need to have the Geocordoinates before continuing

    queryURL = apiURL_GeoCordinatesByLocationName + "q=" + cityName + "&limit=1&appid=" + apiKey
    console.log('API CALL 1 : ' +  queryURL)

    // return data from API
    fetch(queryURL)
    .then(function (response) {
        return response.json()
    }).then(function (data) {

        // check that data has been returned
        if (data == "") {
            console.log("WARNING : API returned NO geocoordinates for " + cityName)
            return // STOP
        }

        // get geocordinates
        cityLatitude = data[0].lat
        cityLongtitude = data[0].lon 


        // check that the data returned is valid for the selected City
        if (data[0].name.toUpperCase() == cityName.toUpperCase()) {
            console.log("Geocordinates found for : city = " + data[0].name + ", lat = " + cityLatitude + ", lon = " + cityLongtitude)
        }
        else {
            console.log("WARNING : API returned geocoordinates for " + data[0].name + ", lat = " + cityLatitude + ", lon = " + cityLongtitude)
        }
        


        // API CALL 2 - Get Todays Weather for the selected City

        queryURL = apiURL_TodaysWeatherByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&units=metric&appid=" + apiKey
        console.log('API CALL 2 : ' +  queryURL)

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("Todays Weather in " + data.name + " : ")
            console.log(data)

            // get todays weather
            var weatherDescription = data.weather[0].description

            var iconCode = data.weather[0].icon
            queryURL =  iconURL + iconCode + ".png"
            console.log("image : " + queryURL)

            var weatherTemp = data.main.temp
            var weatherWind = data.wind.speed
            var weatherHumidity = data.main.humidity

            // display todays weather
            $('#todays-weather-citydate').text(data.name + " (" + todaysDateUKFormatted + ") ")

            $('#todays-weather-icon').attr("src", queryURL);
            $('#todays-weather-icon').attr("alt", weatherDescription);

            $('#todays-weather-temp').text("Temp : " + weatherTemp + " °C")
            $('#todays-weather-wind').text("Wind : " + weatherWind + " KPH")
            $('#todays-weather-humidity').text("Humidity : " + weatherHumidity + " %")

        })


        // API CALL 3 - Get 5 Day Forecast for the selected City
        
        queryURL = apiURL_5DayForecastByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&units=metri&appid=" + apiKey
        console.log('API CALL 3 : ' +  queryURL)

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("5 Day Forecast for " + data.city.name + " : ")
            console.log(data)

            var forecastDate = dayjs() // initialise


            // Forecast Day 1

            // get next forecast date and convert to a DT code 

            // get index of MIDDAY forcast for forecast date

            // get forecast weather

            // display forecast weather


            
        })




    })

}
