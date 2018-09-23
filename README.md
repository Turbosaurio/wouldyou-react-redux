# Would you React Redux
## Instructions
To install run:
```
  yarn install
  yarn start
```
## Udacity Redux Project
The app start witht he auther user set to "none", while it the user is unknown the select an user component will display with the three current users, with a button that will dispatch the current user logged in, once the user is dispatched the app will display the dashboard with the components.

## Components
* Each container inside the dashboard has a top component that includes the user image, name and a logout button that sets the user back to "none"
* Answered questions. Each question has a botton to reset the question, removing it from the user's answers and removing the votes it has.
* Unanswered questions display the two option with buttons for each that add the answer to the user and the user name concatenated to the user specific question.
* Question leaderboard, a chart of all the questions that have answers and the number of votes.
* Create a question, to inputs to write down options for the new question, pushes the new one to the questions, updates the user as the creator.
* User details display the questions submited by the user and the questions already answered by the user.

## Styles
Stylesheets were written using SASS with an SCSS format, no need to install anything, the output CSS file is there already.


