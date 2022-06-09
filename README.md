# Project 02: Full Stack Application
# Richard Afrane-Kesey& Marc Usher

## Introduction
For this Node.js full stack application project, my partner and I discussed suitable ideas for the web app and we decided to work on a full stack web app that would allow users to browse local/community sport teams in London Boroughs.

We went with this idea for a number of reason:

* We both had an interest in sport and would enjoy working on the project
* The idea lent itself well to having three interlinked resources, allowing us to explore One to Many and Many to Many relationships
* It also felt like a tool that could empower communities, as a lot of the data would be crowdsourced by users themselves adding new teams, sports or boroughs.

We decided we wanted the app to be browsable by anyone, but users who created an account would then be able to add new teams, new sports and new boroughs/areas so that it feels like a community-led resource.

We decided to have 3 main data resources and to include them as Referenced data, rather than embedded, as this seemed like a tidier approach:

- **Team** - This would be the most detailed Model, and reference the relevant linked Sport & Borough via their ids, and also reference the user who created it.
- **Sport** - This would have quite a basic Model and reference the relevant 
Teams & Boroughs via their ids, and also reference the user who created it.
- **Borough** - This would have quite a basic Model and reference the relevant linked Teams & Sports via their ids, and also reference the user who created it.


## Technologies Used
* Node.js
* Express, including the following middleware:
    * Bcrypt
    * Connect Flash
    * Dotenv
    * EJS & Express EJS Layouts
    * Express Session
    * Method Override
    * Moment
    * Mongoose
    * Passport & Passport Local
* MongoDB
* Bootstrap Library and additional custom CSS
* Front-end Javascript
* Heroku (for deployment)

## Idea Development
* [Trello Board with Mockups, ERD & User Stories](https://trello.com/b/0jRY5sv5/ga-project-2-marc-richard)
* Once we had decided on the idea, we created our mockups to have a rough idea of what the finished app could look like, and also help decide how many views we'd need and which ones could be easily recycled with some small changes.
* We then created our Entity Relationship Diagram (ERD) in order to decide exactly what data fields each Resource would need, and how they would be interlinked. As described above we decided to use Referenced Data for our Models, as this would allow each document to exist independently and make it easier for editing and updating without impacting other document.
* As part of this we also decided how the User model would be linked to our 3 Resources, and decided that including a 'Created by' field in each document referencing the ID of the user who created it would allow us to more easily allow only that user to edit or delete those documents.

## Dev Diary

### Dev Day 01
* Our first day of development started with some shared pair programming in order to set up our repository and workflow and also get the skeleton of our project structure up and running. This included:
    * GitHub Repo setup and dev workflow
    * Express set-up and dependency/middleware installation
    * Server.js set up
    * Basic **Index** route, controller & view set-up
    * Basic **Team** model, route, controller & view set-up, including each element of required CRUD functionality (Creating new records, Reading All and Individual records, Updating records and deleting records)

By sharing the role of lead coder back and forth throughout the morning, we were able to each have a hand in the project set-up.

In the afternoon we worked on setting up the basic requirements for our remaining two resources of **Sports** and **Boroughs**, keeping all the resources separate for the time being just to make sure the functionality was working correctly across the board.

**End of Dev Day 01** - the above was all completed, and we agreed we could work on linking our three main Resources together on Day 2 and updating the Models and Functionality to get these working as Referenced Data.

### Dev Day 02
* Our second day of development was tricky! We started by reviewing our ERD and data sources and went into detail about how they would all be linked. After a lot of discussion about specifics we decided to drop the **Boroughs** as a resource and focus on linking the **Teams** and **Sports**.
* We pair programmed in the morning to get the **Teams** and **Sports** accepting IDs correctly and ensured the CRUD functionality still worked.
* In the afternoon we split again, with one of us adding Bootstrap and some simple CSS styling while the other planned out the authentication/authorisation functionality in more detail.

**End of Dev Day 02** - the above was all completed, and we agreed that the next day would focus on the final deliverable of authentication & authorisation.

### Dev Day 03
* We spent most of Day 3 pair programming and working our way through the authentication and authorisation functionality step by step.
* The morning was spent getting our web app to the same level as the work we'd done in class, including:
    * **User** model
    * Sign up, sign in and logout
    * Securing routes and navigation options behind the login.

In the afternoon we worked on the additional deliverables, including allowing a user to: 
* change their password
* see their profile and the resources they had created
* edit their profile
* edit and delete only their resources (not those created by others)

This was really tricky! We eventually worked out the way to do all the above, with just a few syntax errors helpfully pointed out by Saad.

**End of Dev Day 03** - our app now met all the project requirements, and we agreed that Day 4 could focus on styling, additional deliverables such as mobile responsiveness, and deployment.

### Dev Day 04
* We agreed to split out the final styling work, with one person working on index and detail page views while the other worked on home, user profiles and add/edit form page views.
* We deployed the app to Heroku in the morning and spent most of the afternoon finalising the styling and look & feel of the web app.
* We finished by doing a final code merge and tweaking one or two elements across the separate areas we had done to ensure design consistency.

## Unsolved Problems
* Adding a team pushes the team ID into an array in the Sports document. Deleting a team removes them from the database but doesn't remove the ID from the array. Would be good to fix this to avoid an untidy database.
* We included an "image url" field in order to allow users to input the URL of an image hosted elsewhere (eg. Imgur) and then include that on the Sport or Team detail page, but we weren't able to fully implement this in time in our design.

## Future Enhancements
* Editing a Team doesn't allow you to edit the Sport played by that Team (for the reasons listed above re: arrays). We would like to fix this in future iterations.
* Integrating the third resource of Boroughs, and updating the Teams and Sports models and data accordingly to allow users to filter a Borough's results by sport.
* Adding an image upload feature (rather than the image URL being passed as a string) would be a great way to give the web app a real community spirit and make it feel crowd-sourced.