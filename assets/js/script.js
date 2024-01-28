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
        performSearch(userInput)
    }
 
})



// MAIN Logic
// ----------

// Search for a Cities weather, Display Results and create a Button in the search "History" section 
function performSearch(cityName){


    var apiURL_GeoCordinatesByLocationName = 
        "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
    
    
    var apiURL_RequestByCityName = "https://api.openweathermap.org/data/2.5/weather?"
    
    var apiKey = "bacc1eea38f464a624c0b32d6374373c"   // OpenWeatherMap key
    
    var queryURL = ""
    var cityLatitude = "44.34" // test values
    var cityLongtitude = "10.99"

    queryURL = apiURL_RequestByCityName + "q=" + cityName + "&apiid=" + apiKey



    // Get Geocordinates for the selected City - CALL API
    // note : other API calls are nested within this one, as we need to have the Geocordoinates before continuing

    queryURL = "http://api.openweathermap.org/geo/1.0/direct?" + "q=" + cityName + "&limit=1&appid=" + apiKey
    console.log('query: ' +  queryURL)


    // Return data from API
    fetch(queryURL)
    .then(function (response) {
        return response.json()
    }).then(function (data) {

        console.log(data)
        
        cityLatitude = data[0].lat
        cityLongtitude = data[0].lon 

        // check that valid data has been returned
        if (data[0].name == cityName) {
            console.log("Geocordinates found for : city = " + data[0].name + ", lat = " + cityLatitude + ", lon = " + cityLongtitude)
        }
        else {
            console.log("Error : API returned geocoordinates for : " + data[0].name)
        }
        



        // CALL API - Get Todays Weather for the selected City

    /*     // works
    queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bacc1eea38f464a624c0b32d6374373c"
    console.log('query: ' +  queryURL)
    alert('query: ' +  queryURL) */

        queryURL = apiURL_RequestByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&appid=" + apiKey
        console.log('query: ' +  queryURL)

        // Return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log(data);
        
        })




    });










    



}
