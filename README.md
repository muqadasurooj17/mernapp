<!-- mongoimport --uri mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/GoFoodMern --collection FoodItems --jsonArray --file "D:\projects\goFood\mernapp\foodData2.json"
added the data

mongoimport --uri mongodb+srv://muqadasurooj:gOtkpUexqWb6xdoY@gofoodmern.f0qegyz.mongodb.net/GoFoodMern --collection MernApp --jsonArray --file "D:\projects\goFood\mernapp\foodCategory.json"
added second data



use nodemon so that you dont have need to run commands again and again
monggooose is used to create schemaa for mongodb atlas as its schemas less. 
schema is used to validate things and data 
how to console.log our data by mongosse using schema way
add database name befor question mark in connection query
keep find blank when you are trying to fetch complete data
creating apis and urls with help of express
showing some response when user is cretaed
installing express validator
app.use is a middle ware and we have to use express .json in it -->

# Restaurant Management System

![Project Logo](link-to-your-logo-image)

Welcome to the Restaurant Management System project! This system is designed to help restaurant owners manage their orders and menu items efficiently. Whether you run a small café or a large restaurant, this system can simplify your daily operations.

## Table of Contents
- [Features](#features)
- [Screens](#screens)
- [Database](#database)
- [API](#api)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure user registration and login using bcrypt for password hashing and JWT (JSON Web Tokens) for authentication.
- **Responsive Design**: A responsive web application built using React and Tailwind CSS, ensuring a seamless experience on various devices.
- **Menu Management**: Categorize and manage restaurant menu items easily.
- **Order Management**: Users can view their orders and add items to their cart.
- **API Testing**: Utilizes Thunder Client for verifying API endpoints.

## Screens
1. **Login**: Users can log in to their accounts.
2. **Signup**: New users can create an account.
3. **My Orders**: Users can view their order history.
4. **Add to Cart**: Allows users to add items to their cart.
5. **Main Screen**: Displays categories of menu items.

## Database
The project uses MongoDB Atlas to store data. There are two main collections:
1. **Category Data**: Contains information about available categories (e.g., starters, pizza, rice).
2. **Items Data**: Contains information about the available items related to categories.

## API
The project's API endpoints include:
- `/api/signup`: Allows new users to register and stores their information securely in the database.
- `/api/login`: Provides secure login functionality with authentication tokens.
- `/api/categories`: Fetches and manages category data.
- `/api/items`: Handles menu item data.
- `/api/orders`: Manages user orders.

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/restaurant-management-system.git`
2. Change directory to the project folder: `cd restaurant-management-system`
3. Install the required dependencies:
