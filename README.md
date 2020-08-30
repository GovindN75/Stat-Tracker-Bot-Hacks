# Overwatch Stats Tracker
A Full Stack stats tracker made for the game Overwatch using Vue.js, Node.js, Express.js and tracker.gg's Overwatch API. It allows users to look up different player's stats across Battlenet, Xbox, and PlayStation Network. The stats tracker functions as follows: 

### Search Page
This is the initial page when the web application is loaded. It will prompt the user to select the platform the account is on, and input the username (along with a Battletag code if the user is on Battlenet). When submitted, the web application will pass the data to the API and return the relevant player's data if found. Else, it will display an error page prompting the user to go back. <br/><br/>
![Search Page](https://user-images.githubusercontent.com/54968551/91649748-24d80000-ea45-11ea-86e7-72f2a5e0fcb6.PNG)

### Career Stats
The name of the player and the platform they are on is displayed here. There is a summary of what the player has achieved, such as time played, games won, and the winrate. <br/><br/>
![Career Stats](https://user-images.githubusercontent.com/54968551/91649795-bc3d5300-ea45-11ea-9dd5-16a5e5308fbc.PNG)

### Quickplay/Competitive Stats
These are the stats the player has achieved in the respective game modes. Some of their best game achievements are also included. <br/><br/>
![Quickplay Stats](https://user-images.githubusercontent.com/54968551/91649750-24d80000-ea45-11ea-8324-c4971151107a.PNG)
![Competitive Stats](https://user-images.githubusercontent.com/54968551/91649747-243f6980-ea45-11ea-8a8e-01e058cc3963.PNG)

## To Run The App
After navigating to the project's directory you must run: 
### `npm install`
This installs the dependencies the project uses. Then, run: 
### `npm run dev`
This runs the front end and the backend concurrently and you will be able to test the app. You will be given a link in the terminal and by navigating to that link in your <br/>
browser, you can view the app. 







