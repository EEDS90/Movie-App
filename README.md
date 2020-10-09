# Movie-App

# Project Overview: 
This app will display the top new releases available. When the use hover over the the movie they will get an overview of what the movie is about, the rating, title and an image of the movie. It will also have a feature to search for any movie.

## Project Name

Rotten Potatoes

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. A functional Movie finder app, with a title, movie overview, rating and image

## Wireframes
https://www.figma.com/file/aYNR5QAfetFQyf6H2gbOHP/Rotten-Potatoes?node-id=0%3A1

## Component Hierarchy
Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

http://www.omdbapi.com/?i=tt3896198&apikey=4d77e518& 

{
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy, Sci-Fi",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 56 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "552,519",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Marvel Studios, Walt Disney Pictures",
    "Website": "N/A",
    "Response": "True"
}

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Create my React application, components folder and create a file "Movie.js
- First I nee to import my movie component. 
- I will loop and .map my movie components.
- Make my API calls into my App.js file.
- Implement { useEffect, useState } to my React, from "react" to get the movies.
- I will create an empty array which will lead to the movies not showing, but they will eventually show when I get it from the API.
- Do my API fetch.
- Work on getting my title and images.
- Create a class name movie container to style my data (movie images and title).
- Work on my index.cc to style the page, make the display flex, adjust, padding hight, width, background color etc.
- Align items center and justify content, space between etc.
- Add my movie overview feature
- Then add a component to create a search bar, so whenever I hit enter the page submits a form.
- Create a function to render the information from the API to the serach button.
- Make sure that the page is responsive.
- Make sure that the page is functional.
- Search for any bug, errors, mistakes and fix them accordingly.
- Have fun while I play with my new invention.

#### PostMVP  
- I would like to style it more.
- Add a review item to the page.
- Brainstorm and come up with ideas on how I can make it better.
- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Octb 08-09| Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|Octb 10| Project Approval | Incomplete
|Octb 10-11| Core Application Structure (App.js, index.CSS, etc.) | Incomplete
|Octb 12| Pseudocode / actual code | Incomplete
|Octb 13| Initial Clickable Model  | Incomplete
|Octb 14-15| MVP | Incomplete
|Octb 16| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | 05H | 05hrs| 05hrs | hrs |
| Working with API | 10H | 10hrs| 10hrs | hrs |
| Actual coding | 10H | 10hrs| 10hrs | hrs |
| Css design | 10H | 10hrs| 10hrs | hrs |
| Finishing touches | 05H | 05hrs| 05hrs | hrs |
| Total | 40H | 40hrs| 40hrs | 40hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
