Topic: JavaScript
Submission Date: 10 July 2024
Time: 12:00

Please submit by pushing to your github repository and sharing the link on Slack with your mentor.

Title: Task 3 - Lotto Simulator (Part One)

Objective
The objective of the task is to assess your  overall understanding of JavaScript arrays, objects, and their methods. It also incorporates HTML and CSS, so it basically brings us to a closure of our React.js preparation.

User interface
Create a user-friendly interface that is intuitive to use.
Have an option to switch between an admin and normal user
Allow users to intuitively select their six numbers from 52 numbers
Allow users to see how much the ticket/s cost.
Allow users to choose to use the same numbers to enter Lotto Plus 1 and Lotto Plus 2
When generating the tickets ask the user how many boards they want to enter with.
The app should then generate the boards where the user will need to select which numbers they want on the board
Make sure the ball colours match the lotto ball colours:
Red: 1 - 13
Yellow: 14 - 25
Green: 26 - 37
Blue: 38 - 52

Features
Admin
Draw simulation: Have a page where you can simulate the lotto draw
After draw is simulated, show how many tickets won (3 balls match and higher)
Save the data for the winning tickets
User
A page for the users to choose how many boards they want. 
Calculate how many tickets automatically, 10 max boards per ticket are allowed. 
User should see the price of the total tickets:
Users should be able to enter their lotto ticket for Lotto Plus 1 and Lotto Plus 2 to increase their chances of winning something.
Boards:
Lotto Plus 1 and Lotto Plus 2 boards are dependent on the Lotto board. You can’t choose different board numbers for LP 1 and LP2 independently of the Lotto board, you can only use the same numbers you chose for the Lotto board to be entered for LP1 and/or LP2 as well.
Every board is assigned to a ticket
Board pricing:
A lotto board is R5.00
Lotto Plus 1 entry is R2.50 per board
Lotto Plus 2 entry is R2.50 per board
Tickets:
Every ticket should have an identifier eg ticket number
Tickets can have multiple boards; tickets have a minimum of 1 board and a maximum of 10 boards
If more than 10 boards are chosen, a new ticket is automatically generated for the new board. The logic continues going forward, 22 boards will create 3 tickets with one ticket only having 2 boards.
The date the ticket was purchased should be saved 
Ticket pricing (based on number of boards) :
9 boards on a ticket  equals 9 * 5 = 45
If ticket is entered for LP1 then (5 + 2.5) * 9 = 67.5.
Draws:
Save all entry tickets for history
Save all winning tickets
Save all drawn numbers for history
All users should be alerted if they won something
Admin should be alerted if there’s a winner, and a total of the winning tickets
The date of the draw should be saved

Notifications
Users should be able to see an alert of their bet/entry before simulating the conclusion of the purchase.
Users should be able to get a notification when they login if their numbers won during the simulation

Persistence
Make use of localStorage to store the numbers the user chooses.
After the draw save the winning numbers
The date of the entries should be saved
The date of the draw should be saved


Concepts the task covers
Arrays and array methods
Objects and object methods
JS dates manipulation
LocalStorage
The JSON object and its methods
Web page responsiveness


Instructions
Plan carefully for the task logic to avoid having to rewrite your function
Plan the design of the application to make sure it is aesthetically pleasing
Please ensure it is responsive to different screen sizes/resolutions
Blogs, videos and AI are allowed to be used for research, but ensure you understand what you are writing so you are able to explain to anyone every single line of code you have written.

