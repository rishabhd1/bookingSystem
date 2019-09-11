# Taxi Booking System

This is and API based website made using Express.js, Node.js, React, Redux and MongoDB

## Environment Setup

Node and NPM is needed to run this project.

For Windows: https://nodejs.org (Download and install node)

For Debian based Linux:

```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs
```

Check Node.js and NPM version

```bash
node -v
npm -v
```

## Project Setup

Clone the project

```bash
git clone https://github.com/rishabh-9000/bookingSystem.git

cd bookingSystem
npm install

cd client
npm install
```

To run the app

```bash
Go back to main directory from client

cd ..
npm run dev
```

## Technologies Used

Express.js
Node.js
React
Redux
MongoDB

## Thought Process

I went for MERN stack since I have not used it before so something new to learn.
Also I had to use it once selected so, it proved to be a good preparation.

## What is not working

1. It shows transaction failed even with correct input.
2. User can book without logging in sometimes.
3. Docker

## Other Issues/Limits

1. There is no intensive input check. Only minor checks have been implemented.
2. There is only 1 city booking, no multicity or package.
3. Price calculation have been implemented only based on distance.
