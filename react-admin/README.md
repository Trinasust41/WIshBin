## This the instruction portion for react-admin

This is similar to the setup phase of client side

## Installation:
  * First the project need to be downloaded or else we need to create a react app manually by giving the command npx create-react-app react-admin
  * Then we need to go to the api folder by typing cd react-admin
  * If we want to manually create node modules manually, we need to run the command npm install for creating the node modules
  * Then we need to run the command npm start
  
  
## Requirements 
We need Reactjs, Redux for the developments. 
In our project if we want to run the admin panel with authentication. we need to firstly run the client server and log into a admin account then we can disconnect the client servers.
and can npm start the admin panel because it gets the user data from the saved localstorage and can directly connect to the admin panel.

We need to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 If we want to run the client server and the admin server simultaneously then we need to give the command npm npm start at the particular folder path and then we will see if the client server run at [http://localhost:3000](http://localhost:3000), the admin server will run at another like this [http://localhost:3001](http://localhost:3001) 

We can also use yarn in stead of npm. For that we need the supported libraries. For the icons, navigation, or for the other requirements we may need to install the supported library for the project like material icons or react-router-dom or cors

If we want to have the connection with the backend then we must start the backend server for building the connection with database. Then we need to start the client server. These two servers will run simultaneously.
