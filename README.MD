# CRUD Application with React, Node.js, and MySQL

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This is a simple CRUD (Create, Read, Update, Delete) application built using React for the frontend, Node.js for the backend, and MySQL for the database. The application allows users to perform CRUD operations on a sample dataset.

## Features

- Create new records
- Read and display records
- Update existing records
- Delete records

## Technologies Used

- **Frontend:**
  - React
  - Axios (for HTTP requests)
  - Bootstrap (for styling)

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MySQL

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MySQL

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crud-app.git
   cd crud-app/backend

2. Install the dependencies:

   ```bash
   npm install

3. Create a .env file in the backend directory and add your MySQL database         configuration:

   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase

4. Initialize the database (make sure MySQL is running and you have created the database):
   
   ```bash
   CREATE DATABASE crud_app;
   USE crud_app;
   CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    position VARCHAR(255),
    company VARCHAR(255),
    businessArena VARCHAR(255),
    employees VARCHAR(255),
    street VARCHAR(255),
    additionalInfo VARCHAR(255),
    zipCode VARCHAR(255),
    place VARCHAR(255),
    country VARCHAR(255),
    code VARCHAR(255),
    phoneNumber VARCHAR(255),
    email VARCHAR(255)
);

5. Start the backend server:

   ```bash
   npm start

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend

2. Install the dependencies:

   ```bash
   npm install

3. Start the frontend development server:

   ```bash
   npm start

### Usage

1. Open your browser and navigate to http://localhost:3000 to access the frontend of the application.

2. Use the interface to perform CRUD operations on your dataset.
   