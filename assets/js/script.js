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

// - Search button "click" event
$("#search-button").on('click', function(event){
    
    event.preventDefault()

    // get the City name typed by the user and search for its weather
    var userInput = $("#search-input").val().trim()
    if (userInput === "") {
        alert("Please enter a City name")
    }
    else {
        performSearch(userInput)
    }
 
})



// MAIN Logic

// Search for a Cities weather, Display Results and create a Button in the search "History" section 
function performSearch(cityName){

    alert("Serching for : " + cityName)

    var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var key = "ECZoOAlTRGOJAywEGRUYfKipBHddQ9EE"; // NYT key
    var queryURL;

    queryURL = apiURL + "q=" + cityName + "&api-key=" + key;
    

    alert('query: ' +  queryURL)


 
    console.log('query: ' +  queryURL)

    



    



}
