# FoodieDelight

## Problem Statement
   The task was to create a functionality for managing restaurants on a platform, which includes:

   Adding a new restaurant.
   Modifying an existing restaurant's details.
   Deleting a restaurant.
   Listing all restaurants.
   The data interactions are done via asynchronous API calls, and the application must ensure responsiveness, usability, and data validation.

## Task Breakdown
  ### Setup and Environment:

    Created a new Angular project with v18.

  ### Components Created:

     Restaurant List Component: Displays a list of all restaurants with options to edit, or delete.
     Restaurant Add Component: Form for adding a new restaurant.
     Restaurant Edit Component: Form for editing an existing restaurant.
     Navbar: with two options add restaurant and home 
     Restaurant Service: It Handles API calls for CRUD operations.

  ### Considerations
     Data Validations: Implemented validation for form fields to ensure data integrity.
     Responsiveness: Styled components to ensure they are responsive and user-friendly.
     Navigation: Utilized Angular Router for navigation between components.
     Deactivate Guard: Added a deactivate guard to prevent users from accidentally navigating away from the "Add Restaurant" or "Edit Restaurant" forms without 
     saving their changes. This ensures that any unsaved data is not lost.

## Setup and Installation

   ### Prerequisites
    Node.js: In this project Angular v18 is used so pls Ensure you have Node.js version 18.9.1 or above installed. You can check your     Node.js version by running node -v

  ### Installation Steps
    1. Clone the Repository
    2. Install Dependencies:npm install
    3. Run the Application:
