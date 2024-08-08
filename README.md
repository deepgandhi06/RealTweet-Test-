# RealTweet
RealTweet is a Twitter clone designed to ensure that only real users can create accounts by verifying Aadhaar numbers.
Built using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS, RealTweet provides a secure and authenticated social media platform.

# Features
Aadhaar Verification: Only real users can sign up and create accounts by verifying their Aadhaar number.

User Authentication: Secure user login and signup functionality.

Post Tweets: Users can post, edit, and delete tweets.

Follow Users: Ability to follow and unfollow other users.

Like and Retweet: Users can like and retweet posts.

Responsive Design: The application is fully responsive and works across all devices.

Real-Time Updates: Live updates for new tweets and interactions.



# Technology Stack

Frontend:

React.js

Tailwind CSS

Backend:

Node.js

Express.js

Database:

MongoDB

Authentication:

JWT (JSON Web Tokens) for secure authentication.

Verification:

Integration with Aadhaar API for user verification.

Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.


# Prerequisites

Node.js (v14.x or above)

MongoDB (local or Atlas)

Aadhaar API access for verification

# Installation

Clone the repository:


git clone https://github.com/yourusername/realtweet.git
cd realtweet

Install dependencies for both frontend and backend:


# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend folder with the following variables:

env
Copy code
MONGODB_URI=your_mongodb_connection_string

Run the application:

bash
Copy code
# Run backend server
cd backend
npm start

# Run frontend server
cd ../frontend
npm start
The backend will run on http://localhost:5000 and the frontend on http://localhost:3000.


# Usage

Sign Up: Create an account by providing your Aadhaar number for verification.

Log In: Access your account using your registered email and password.

Post Tweets: Share your thoughts with the world in real-time.

Interact: Like, retweet, and follow other users to engage with content.


# Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.



