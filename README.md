HW Submission Repo for BU CS591 MEAN stack

HW 4 writeup:
    
    
   I created two functions in app.service.ts to hit two different routes:
   
   http://localhost:4200/users
   
   /users allows you to type in a users name and then retrieves the user's 
   favorite weather locations. Since this app does not utilize a persistent
   data base, I have hard coded the values on the server side 
   (in HW_3/routes/users.js). Lastly, you can dynamically edit the user data 
   by clicking the "delete" button next to a user's favorite weather locations.
   However this data does not persist, since there is no database. 
  
   
   http://localhost:4200/search
   
   /search allows the user to type in a city and then hits an accuweather api
   searching for that city. It returns all the keys, cities and countries from 
   the api call
    
   The routes can be found in the app.routes.ts folder. 
   
