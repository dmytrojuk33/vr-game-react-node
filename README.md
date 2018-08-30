# Bingo Game
Design, implement and style a Bingo game that demonstrates your FullStack JavaScript coding
abilities including HTML, CSS, React, Node.

## General Bingo game rules:
- players are issued tickets containing 25 random numbers from 1 to 100
- the 25 non repeating numbers are arranged in a 5x5 matrix (5 rows by 5 columns)
- the game begins with the GM (game master, who runs the game) drawing the first ball which contains a number from 1 to 100
- players cross that number off any of their tickets, if that number is found on the ticket
- the game continues until one player crosses off all the numbers on at least 1 ticket (more tickets can win at same time)
- the player calls "Bingo:" and submits the winning ticket for verification

## Functional Requirements:
1. As a Player I want to be able to obtain 4 valid Bingo tickets that are not identical and display
them on screen
2. As a Player I want to display on screen the numbers crossed from each ticket as the game
progresses
3. As GM I want to be able to verify a player's claim they won the Bingo, if false, resume the Bingo
game
4. As a player I want to be able to know when a new ball (number) was drawn, verify and display
of its presence on my ticket(s)
5. As a Player I want to be able to claim I won and submit my winning ticket for verification

## Non-functional Requirements:
1. The solution architecture should include the ReactJS based browser game that uses a RESTFul
API endpoint
2. The RESTFul API should be implemented using Node.js + ExpressJS

## Implementation hints:
1. Implement a 1 player browser based bingo ticket display and functionality with HTML, CSS3,
React
2. For the REST API, implement an endpoint to draw the next ball and an endpoint to verify a
winning ticket claim
3. On the React side when you obtain the next ball from the API server, mark it if found on any or
all the tickets you initialize

## Solution assessment (when submitted and also during the follow-up on-site interviews):
- Problem solving: How effective are you at understanding the problem and devising a
solution for it?
- Design: How do you design and lay out your code? Is it well organized with easy to
understand interfaces?
- Correctness: Do you think clearly about the correctness of your code? Do you use explicit
reasoning and/or tests to check correctness? Do you consider edge and error cases?
- Debugging: Do you spot the bugs in your code? When you find one, can you fix it?
- Programming language familiarity: Are you comfortable with the language you're writing?
Is your code idiomatic for the language?
- Tools familiarity: Are you set up to write code? Can you run it? You donʼt need to have an
advanced editor or setup; you should just be comfortable and productive in your chosen
environment.
- Communication: Do you clearly explain your thoughts? How well do you respond to
feedback or suggestions from your interviewer? Do you seek help or guidance when stuck?
- Production readiness: plan for outages, 99.9999% availability

Once you are done coding, please upload your solution to your github account and send us the
link.
Good luck!
