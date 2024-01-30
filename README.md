# Challenge 8 - Weather-Dashboard

Challenge project for 08-server-apis-module
 
Task - Create code for a "Weather Dashboard" where the user can enter City Names to get Weather information for the Cities. 

Developer - Steve Hannay

Completed - 30th Jan 2024


## Description

The aim of this project is to create a Weather Dashboard for viewing weather for selected Cities.

One City at a time is selected by the user (either by typing the city name or clicking on a "History" button). 

Both "Todays Weather" and a "5 Day Forecast" are displayed for the selected City.

After a user types a City name, a "History" button is created for that City. 

Clicking a history button will re-display the weather for that City.


Note : Weather information is returned from https://api.openweathermap.org using API CALLS.


The following acceptance criteria was set for the project :

--------------------------------------------------------------------------------------------------------------------------

    The app should:

    * Create a weather dashboard with form inputs.
    
    * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
    
    * When a user views the current weather conditions for that city they are presented with:
        * The city name
        * The date
        * An icon representation of weather conditions
        * The temperature
        * The humidity
        * The wind speed
    
    * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
        * The date
        * An icon representation of weather conditions
        * The temperature
        * The humidity
    
    * When a user click on a city in the search history they are again presented with current and future conditions for that city
  
--------------------------------------------------------------------------------------------------------------------------

During the process of working on this project I have learned more about the javascript coding, including the use of arrays of objects, html tables, element creation, event handling and API Calls. 

Furthermore, I have become a little more familiar with working with GitHub and ReadMe files.


## Installation

Open the following webpage from any internet browser.

[Challenge 8 - link to Weagther Dashboard webpage](https://stevehannay.github.io/Weather-Dashboard)

No installation is necessary. 


## Usage

A weather forecast consists of a "Todays Weather" section and a "5 Day Forecast" section.

Forecasts include information of Temperature, Wind Speed and Humidity - as well as a descriptive icon.


When the webpage loads the Weather for London will be displayed by default.

The user can type in a City name and the weather for that City will be displayed.

After a user types a City name, a "History" button for that City will be created. The button's text will be the City name.

Clicking on a "History" button will display the weather forecast for that City.




Here are screenshots of the Work Day Scheduler created for the project :

- This is the Weather Dashboard showing weather for London by default
![Challenge 8 - screenshot of the Weather Dashboard showing weather for London by default](assets/images/Screenshot%201%20-%20Initialise%20with%20London.png)

- This is the Weather Dashboard after the user types New York
![Challenge 8 - screenshot of the Weather Dashboard after user types New York](assets/images/Screenshot%202%20-%20User%20types%20New%20York.png)

- This is the Weather Dashboard after the user types Rome
![Challenge 8 - screenshot of the Weather Dashboard after user types Rome](assets/images/Screenshot%203%20-%20User%20types%20Rome.png)

- This is the Weather Dashboard after the user types Paris
![Challenge 8 - screenshot of the Weather Dashboard after user types Paris](assets/images/Screenshot%204%20-%20User%20types%20Paris.png)

- This is the Weather Dashboard after the user clicks the Rome HISTORY BUTTON
![Challenge 8 - screenshot of the Weather Dashboard after user clicks the Rome History Button](assets/images/Screenshot%205%20-%20User%20clicks%20Rome%20history%20button.png)


## Credits

This is a single developer project, based upon what I have been taught by the Bootcamp team.

During the project I studied and used extracts of various code supplied by the Bootcamp when teaching the previous modules and I referenced various online resources including those listed below.

The following information was referenced while coding the project.

[w3 school - Javascript event listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[w3 school - JQuery](https://www.w3schools.com/jquery/default.asp)

[Javascript - Web API's](https://www.geeksforgeeks.org/ways-to-make-an-api-call-in-javascript/)




## License

No licence is currently associated with this project.

