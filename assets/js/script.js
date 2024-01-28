/* 
    Javascript for Challenge 08 
    Developer - Steve Hannay 
    First Created - 27th January 2024

    This code handles logic for the Weather Dashboard

*/


// Define Variables and Event Listeners
// ------------------------------------

// create references to html elements
var txtSearchText = document.querySelector("#search-input")  // reference by id
var btnSearchButton = document.querySelector("#search-button")  // reference by id


// Event Listeners

// - Search button "click" event
$("#search-button").on('click', function(event){
    
    //alert("event")

    var city = $("#search-input").val()

    performSearch(city)

 
})



// MAIN Logic

// Search for a Cities weather, Display Results and create a Button in the search "History" section 
function performSearch(cityName){
    alert("Serching for : " + cityName)

}
