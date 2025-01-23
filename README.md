
# SewNash-Client
Booking platform for a local sewing experience
Deployed to AWS [Visit Site](http://sewnash-app.s3-website-us-east-1.amazonaws.com/)

# Overview
- **Purpose:** As a sewing experience business owner I want to have a booking platform to keep track of all  my class bookings also I want my customers to be able to book classes themselves based on what I make available.
- **Problem Solved:**  It is a dated practice to have to call and set bookings for any local business and with giving card information over the phone there are some securtiy concerns.
- **Solution:** The SewNash solves this issue by providing a user-friendly booking platform that makes it easy for customers to book this experience and for employees to manage them.

# Key Features
- User authentication (login and registration)
- CRUD operations
- Dynamic, responsive design with Bootstrap, CSS, Javascript
- RESTful API integration
- External API integration with Stripe (Payment), and AWS S3 (for photo storage)

# Tech Stack
- **Frontend:** React, Bootstrap
- **Backend:** .NET Core Web API, Entity Framwork
- **Database:** Postgres

# Installation

1. Clone this Repo for the front end
2. Clone this link for the backend API [API REPO](https://github.com/gunnarebeling/SewNash-api-final)
3. Configure environment for backend to talk to a postgres database and frontend to comunicate to backend API

# Customer Views
- when a Customer first views the site they are greated with a list of classes available and a button to book by date.
- if the customer clickes on a class it will bring them to a class detail page that displays the information about the class and a calendar to choose a date then available class sessions for that date if any
- if the customer wants to book a class they can click on the session Where it will bring you to a page to book the class.

https://www.loom.com/share/180b847b0c0543b3ad659c2fe4810a88?sid=6dc702c3-859e-4c5d-83e1-22d017ac6440

- If a customer wants to book by date they can click the search button or select by date button
  https://www.loom.com/share/5c9033eb3d6c4c2f87afa1863b7be0d8?sid=2e207317-5c89-4f41-a518-f6c71285c0d1


   
