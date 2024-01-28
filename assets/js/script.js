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

    var apiURL_GeoCordinatesByLocationName = "http://api.openweathermap.org/geo/1.0/direct?"
    var apiURL_TodaysWeatherByCityName = "https://api.openweathermap.org/data/2.5/weather?"
    
    var apiURL_5DayForecastByCityName = "https://api.openweathermap.org/data/2.5/forecast?"

    

    var apiKey = "bacc1eea38f464a624c0b32d6374373c"   // OpenWeatherMap key
    
    var queryURL = ""
    var cityLatitude = "44.34" // test values
    var cityLongtitude = "10.99"

    console.log("**** NEW SEARCH FOR '" + cityName + "' WEATHER ****")


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

        queryURL = apiURL_TodaysWeatherByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&appid=" + apiKey
        console.log('API CALL 2 : ' +  queryURL)

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("Todays Weather in " + data.name + " : ")
            console.log(data)

            // get todays weather
            var iconCode = data.weather[0].icon

            var iconURL = "https://openweathermap.org/img/w/"
   
            queryURL =  iconURL + iconCode + ".png"
            
            console.log("image : " + queryURL)


            // display todays weather

            $('#todays-weather-icon').attr('src', queryURL);



        })


        // API CALL 3 - Get 5 Day Forecast for the selected City
        
        queryURL = apiURL_5DayForecastByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&appid=" + apiKey
        console.log('API CALL 3 : ' +  queryURL)

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("5 Day Forecast for " + data.city.name + " : ")
            console.log(data)
            
        })




    })










    



}
