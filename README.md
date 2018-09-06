# Bingo Game
A bingo game in React/Node submitted for a coding challenge. As a player, you get four tickets to try your hand at winning bingo. When the game master (GM) draws a ball calling a number, hover over the number on your ticket and click to mark it. You can also click on the auto-mark button to automatically mark all drawn numbers on your tickets. With this version of Bingo, once you have a ticket filled with all numbers marked, click on the 'Call Bingo' button to verify your ticket with the GM. Oh, and don't worry about losing your place if you refresh the page. Good luck!

## Usage
Build your webpack bundle after you install all npm dependencies.
```npm run build```
Run the server.
```npm start```

### Challenge Specification Guide
#### General Bingo game rules:
- players are issued tickets containing 25 random numbers from 1 to 100
- the 25 non repeating numbers are arranged in a 5x5 matrix (5 rows by 5 columns)
- the game begins with the GM (game master, who runs the game) drawing the first ball which contains a number from 1 to 100
- players cross that number off any of their tickets, if that number is found on the ticket
- the game continues until one player crosses off all the numbers on at least 1 ticket (more tickets can win at same time)
- the player calls "Bingo:" and submits the winning ticket for verification

#### Functional Requirements:
1. As a Player I want to be able to obtain 4 valid Bingo tickets that are not identical and display them on screen
2. As a Player I want to display on screen the numbers crossed from each ticket as the game
progresses
3. As GM I want to be able to verify a player's claim they won the Bingo, if false, resume the Bingo game
4. As a player I want to be able to know when a new ball (number) was drawn, verify and display
of its presence on my ticket(s)
5. As a Player I want to be able to claim I won and submit my winning ticket for verification

#### Non-functional Requirements:
1. The solution architecture should include the ReactJS based browser game that uses a RESTFul
API endpoint
2. The RESTFul API should be implemented using Node.js + ExpressJS

#### Implementation hints:
1. Implement a 1 player browser based bingo ticket display and functionality with HTML, CSS3, React
2. For the REST API, implement an endpoint to draw the next ball and an endpoint to verify a
winning ticket claim
3. On the React side when you obtain the next ball from the API server, mark it if found on any or all the tickets you initialize

#### Solution assessment (when submitted and also during the follow-up on-site interviews):
- Problem solving: How effective are you at understanding the problem and devising a solution for it?
- Design: How do you design and lay out your code? Is it well organized with easy to understand interfaces?
- Correctness: Do you think clearly about the correctness of your code? Do you use explicit reasoning and/or tests to check correctness? Do you consider edge and error cases?
- Debugging: Do you spot the bugs in your code? When you find one, can you fix it?
- Programming language familiarity: Are you comfortable with the language you're writing? Is your code idiomatic for the language?
- Tools familiarity: Are you set up to write code? Can you run it? You donʼt need to have an advanced editor or setup; you should just be comfortable and productive in your chosen environment.
- Communication: Do you clearly explain your thoughts? How well do you respond to feedback or suggestions from your interviewer? Do you seek help or guidance when stuck?
- Production readiness: plan for outages, 99.9999% availability

#### Engineering FAQ
Question:
May you assume this game will target modern browsers? Is there a minimum browser version this should support?
Answer:
Yes just modern browsers, working on the latest version of Chrome is fine.

Question:
Is a winning ticket completed upon a marked row, column, or diagonal, or is it completed when the entire ticket has all numbers marked? It seems the latter by the instructions.
Answer:
When the entire ticket has all numbers marked.

Question:
Confirming that the ticket’s random numbers are not ordered by column b-i-n-g-o 1-20, 21-40, 41-60, 61-80, 81-100, like some Bingo versions? It seems it is not by the PDF example.
Answer:
Yea, totally random is fine.

Question:
What happens if a player overlooks to cross off/mark a number? Should they be marked automatically? It seems the latter by the instructions.
Answer:
If they don’t cross it off it shouldn’t be marked automatically.

Question:
What happens if a player has a winning ticket but does not call bingo? Should the game automatically stop or keep continuing with additional numbers to be marked on the ticket(s)? Or should bingo be automatically called?
Answer:
If a player has Bingo put doesn’t call it the game should continue as normal. A player needs to call it Bingo to win.

Question:
Should a new ball be drawn upon a button click or at set intervals?
Answer:
Button click.

Question:
Any particular code coverage for Jest/Enzyme unit testing? Any other general expectations on testing for this MVP?
Answer:
Nothing particular! If you can test the main features/logic that’s great, we don’t expect 100% coverage.

Question:
Should the data, including all drawn numbers, persist upon a server restart? General expectations of data persistence?
Answer:
The data doesn’t need to persist for the mvp.. Sounds like a great feature to add later on. Same with persisting the data on the client (if a user refreshes, etc..) You don’t need to persist it. You can add either of these features if you have time.
 
Question:
Do you prefer a global stylesheet, inline styles, CSS modules or Styled Components?
Answer:
Up to you!

Question:
Do you prefer a style guide and/or linter? If not, please let me know if ESLint extending the airbnb style guide is not acceptable.
Answer:
ESLint is acceptable. We’re not particular on any style for this exercise, though it looks good if you’re style/linting is consistent.
We tend to use a mix or prettier and standard on our team.


Once you are done coding, please upload your solution to your github account and send us the
link.
Good luck!
