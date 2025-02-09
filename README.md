# city-client

### Tech Stack:
-  Frontend: React using TypeScript

### The idea of this project is to create a frontend that shows the world map and allows users to see the cities of different countries saved in cities.json file. The user can hover over the city to see the city details

-  Get a list of cities saved in cities.json along with other information (e.g. name, continent, population, country, latitude, longitude, founded, landmarks, etc.)


### Required ENV's
- REACT_APP_CITY_API_BASE_URL=http://localhost:3000/api/v1


### Run Project Locally
-  clone the project


### To install dependencies
-  `yarn install`


### To run project in development mode
-  `yarn start`
-  Open [http://localhost:8000] to view it in the browser


### To build project
-  `yarn build`
-  `cd build`
-  Run live server or any other server to serve the build folder
-  Open [http://localhost:8080] to view it in the browser


### Project Structure
-  src/
   -  components/
      -  WorldMapContainer/ - map container component
      -  TooltipContainer/ - tooltip component
   -  services/ - services for making API calls
   -  types/ - has all types/interfaces used through out the project
   -  utils/ - has common functionality used through out the project (constants etc..)
   -  assets/ - has all static assets like world json files and css
   -  App.tsx - entry point of the project