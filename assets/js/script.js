/* 
    Javascript for Challenge 08 
    Developer - Steve Hannay 
    First Created - 27th January 2024

    This code handles logic for the Weather Dashboard

*/


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
        performWeatherSearch(userInput, true)
    }
 
})

// - History button "click" event
$("#history").on('click', '.history-btn', function(event){

    event.preventDefault()

    // Get the City from the clicked button
    var historyButton = $(event.target)
    var buttonCity = historyButton.text()   
    
    // Search for the Cities weather, Display Results (do NOT create a Button in the search "History" section) 
    performWeatherSearch(buttonCity, false)
 
})


// MAIN Logic
// ----------

// Search for a Cities weather, Display Results and create a Button in the search "History" section 
function performWeatherSearch(cityName, addHistoryButton){

    // Declare variables and initialise
    var apiURL_GeoCordinatesByLocationName = "http://api.openweathermap.org/geo/1.0/direct?"
    var apiURL_TodaysWeatherByCityName = "https://api.openweathermap.org/data/2.5/weather?"
    var apiURL_5DayForecastByCityName = "https://api.openweathermap.org/data/2.5/forecast?"

    var apiKey = "bacc1eea38f464a624c0b32d6374373c"     // OpenWeatherMap key
    
    var iconURL = "https://openweathermap.org/img/w/"   // For displaying icons in an image

    var queryURL = ""
    var cityLatitude = "" 
    var cityLongtitude = ""

    var weatherDescription = ""
    var iconCode = ""
    var weatherTemp = ""
    var weatherWind = ""
    var weatherHumidity = ""

    var todaysDateUKFormatted = dayjs().format("D/M/YYYY")


    console.log("**** NEW SEARCH FOR WEATHER IN '" + cityName + "' ****")


    // API CALL 1 - Get Geocordinates for the selected City 
    // note : other API calls are nested within this one, as we need to have the Geocordoinates before continuing

    queryURL = apiURL_GeoCordinatesByLocationName + "q=" + cityName + "&limit=1&appid=" + apiKey
    console.log('API CALL 1')

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
        console.log('API CALL 2')

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("Todays Weather in " + data.name + " : ")
            console.log(data)

            // get todays weather
            weatherDescription = data.weather[0].description

            iconCode = data.weather[0].icon
            queryURL =  iconURL + iconCode + ".png"

            weatherTemp = data.main.temp
            weatherWind = data.wind.speed
            weatherHumidity = data.main.humidity

            // display todays weather
            $('#todays-weather-citydate').text(data.name + " (" + todaysDateUKFormatted + ") ")

            $('#todays-weather-icon').attr("src", queryURL);
            $('#todays-weather-icon').attr("alt", weatherDescription);

            $('#todays-weather-temp').text("Temp : " + weatherTemp + " °C")
            $('#todays-weather-wind').text("Wind : " + weatherWind + " KPH")
            $('#todays-weather-humidity').text("Humidity : " + weatherHumidity + " %")

        })


        // API CALL 3 - Get 5 Day Forecast for the selected City
        
        queryURL = apiURL_5DayForecastByCityName + "lat=" + cityLatitude + "&lon=" + cityLongtitude + "&units=metric&appid=" + apiKey
        console.log('API CALL 3')

        // return data from API
        fetch(queryURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            console.log("5 Day Forecast for " + data.city.name + " : ")
            console.log(data)

            // Create the Dates which will be used for selecting the individual forecasts
            const forecastDay1 = dayjs().add(1, 'day')
            const forecastDay2 = dayjs().add(2, 'day')
            const forecastDay3 = dayjs().add(3, 'day')
            const forecastDay4 = dayjs().add(4, 'day')
            const forecastDay5 = dayjs().add(5, 'day')
            var searchString = ""


            // Forecast Day 1

            searchString = forecastDay1.format("YYYY-MM-DD") + " 12:00:00" 

            // find forecast
            for (i=0; i< data.list.length ; i++) {
                if (data.list[i].dt_txt == searchString) {

                    // get forecast weather
                    weatherDescription = data.list[i].weather[0].description

                    iconCode = data.list[i].weather[0].icon
                    queryURL =  iconURL + iconCode + ".png"

                    weatherTemp = data.list[i].main.temp
                    weatherWind = data.list[i].wind.speed
                    weatherHumidity = data.list[i].main.humidity

                    // display forecast weather
                    $('#day1-date').text(forecastDay1.format("D/M/YYYY"))

                    $('#day1-icon').attr("src", queryURL);
                    $('#day1-icon').attr("alt", weatherDescription);
        
                    $('#day1-temp').text("Temp : " + weatherTemp + " °C")
                    $('#day1-wind').text("Wind : " + weatherWind + " KPH")
                    $('#day1-humidity').text("Humidity : " + weatherHumidity + " %")
                    
                }
            }

            // Forecast Day 2

            searchString = forecastDay2.format("YYYY-MM-DD") + " 12:00:00" 

            // find forecast
            for (i=0; i< data.list.length ; i++) {
                if (data.list[i].dt_txt == searchString) {

                    // get forecast weather
                    weatherDescription = data.list[i].weather[0].description

                    iconCode = data.list[i].weather[0].icon
                    queryURL =  iconURL + iconCode + ".png"

                    weatherTemp = data.list[i].main.temp
                    weatherWind = data.list[i].wind.speed
                    weatherHumidity = data.list[i].main.humidity

                    // display forecast weather
                    $('#day2-date').text(forecastDay2.format("D/M/YYYY"))

                    $('#day2-icon').attr("src", queryURL);
                    $('#day2-icon').attr("alt", weatherDescription);
        
                    $('#day2-temp').text("Temp : " + weatherTemp + " °C")
                    $('#day2-wind').text("Wind : " + weatherWind + " KPH")
                    $('#day2-humidity').text("Humidity : " + weatherHumidity + " %")
                    
                }
            }

            // Forecast Day 3

            searchString = forecastDay3.format("YYYY-MM-DD") + " 12:00:00" 

            // find forecast
            for (i=0; i< data.list.length ; i++) {
                if (data.list[i].dt_txt == searchString) {

                    // get forecast weather
                    weatherDescription = data.list[i].weather[0].description

                    iconCode = data.list[i].weather[0].icon
                    queryURL =  iconURL + iconCode + ".png"

                    weatherTemp = data.list[i].main.temp
                    weatherWind = data.list[i].wind.speed
                    weatherHumidity = data.list[i].main.humidity

                    // display forecast weather
                    $('#day3-date').text(forecastDay3.format("D/M/YYYY"))

                    $('#day3-icon').attr("src", queryURL);
                    $('#day3-icon').attr("alt", weatherDescription);
        
                    $('#day3-temp').text("Temp : " + weatherTemp + " °C")
                    $('#day3-wind').text("Wind : " + weatherWind + " KPH")
                    $('#day3-humidity').text("Humidity : " + weatherHumidity + " %")
                    
                }
            }

            // Forecast Day 4

            searchString = forecastDay4.format("YYYY-MM-DD") + " 12:00:00" 

            // find forecast
            for (i=0; i< data.list.length ; i++) {
                if (data.list[i].dt_txt == searchString) {

                    // get forecast weather
                    weatherDescription = data.list[i].weather[0].description

                    iconCode = data.list[i].weather[0].icon
                    queryURL =  iconURL + iconCode + ".png"

                    weatherTemp = data.list[i].main.temp
                    weatherWind = data.list[i].wind.speed
                    weatherHumidity = data.list[i].main.humidity

                    // display forecast weather
                    $('#day4-date').text(forecastDay4.format("D/M/YYYY"))

                    $('#day4-icon').attr("src", queryURL);
                    $('#day4-icon').attr("alt", weatherDescription);
        
                    $('#day4-temp').text("Temp : " + weatherTemp + " °C")
                    $('#day4-wind').text("Wind : " + weatherWind + " KPH")
                    $('#day4-humidity').text("Humidity : " + weatherHumidity + " %")
                    
                }
            }

            // Forecast Day 5

            searchString = forecastDay5.format("YYYY-MM-DD") + " 12:00:00" 

            // find forecast
            for (i=0; i< data.list.length ; i++) {
                if (data.list[i].dt_txt == searchString) {
            
                    // get forecast weather
                    weatherDescription = data.list[i].weather[0].description
            
                    iconCode = data.list[i].weather[0].icon
                    queryURL =  iconURL + iconCode + ".png"
            
                    weatherTemp = data.list[i].main.temp
                    weatherWind = data.list[i].wind.speed
                    weatherHumidity = data.list[i].main.humidity
            
                    // display forecast weather
                    $('#day5-date').text(forecastDay5.format("D/M/YYYY"))
            
                    $('#day5-icon').attr("src", queryURL);
                    $('#day5-icon').attr("alt", weatherDescription);
                    
                    $('#day5-temp').text("Temp : " + weatherTemp + " °C")
                    $('#day5-wind').text("Wind : " + weatherWind + " KPH")
                    $('#day5-humidity').text("Humidity : " + weatherHumidity + " %")
                                
                }
            }

        }) // end fetch weather

    }) // end fetch city geocode



    // Create a Button for the selected City in the search "History" section 
    if (addHistoryButton) {

        var historyButtonEl = $("<button>")
        .addClass("p-2 text-center history-btn saveBtn fa fa-save")
        .attr("type", "button")
        .attr("data-city", cityName)                  // store selected City with button
        .text(cityName)

        $("#history").append(historyButtonEl)

    }


    // Clear the "Search Input" Text
    $("#search-input").val("")

}
