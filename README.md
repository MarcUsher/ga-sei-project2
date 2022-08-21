# General Assembly Project 2 - London Teams

## Table of Contents
* Introduction
    * Brief
    * Project Overview (including screenshots & link to deployed app)
    * Team Members & Timeframe
    * Technologies Used
* Approach Taken
    * User Stories
    * ERDs
    * Wireframes
    * Project plan
* Build Process (featured code)
* Final Product
* Conclusions
    * Wins & Challenges
    * Bugs
    * Future Improvements
    * Key Learnings


**Deployed App on Heroku: [London Teams](https://londonteams.herokuapp.com/)**

## Introduction

### Brief

* **Work in pairs to build a full-stack web application from scratch** using the Express framework.
* **Use Node.js, HTML, CSS, JavaScript and a NoSQL database (MondoDB)** to build the application with MVC architecture.
* **Include a User resource**, authentication and authorisation, and allow the user to change their password.
* **Include two additional resources** with full CRUD functionality for registered users and relationships between the resources.
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which can be cut.
* **Deploy the application online** through Heroku so it's publicly accessible.

### Project Overview - London Teams

London Teams is a full-stack web application that allows users to browse local community sport teams in London Boroughs. 

Registered users can add their teams to the database to recruit new members, edit and delete the teams they’ve added, and also add any sports that do not yet exist, to make the app feel like a community-led resource.

![London Teams Homepage](/public/images/appscreenshot-01.png)

### Deployed App
[Visit London Teams](https://londonteams.herokuapp.com/)

### Team Members

* [Marc Usher](https://github.com/MarcUsher) (Team Lead)
* [Richard Afrane-Kesey](https://github.com/richard70UKGithub)

### Timeframe

1 week

### Technologies Used

* Node.js and Nodemon
* Express, including the following middleware and tools:
    * Bcrypt
    * Body-parser
    * Connect Flash
    * Dotenv
    * EJS & Express EJS Layouts
    * Express Session
    * Method Override
    * Moment
    * Mongoose
    * Passport & Passport Local
* MongoDB
* HTML5
* CSS3
* Bootstrap CSS Framework
* JavaScript & jQuery
* Git & GitHub
* Figma (for mockups)
* Visual Paradigm (for ERD)
* Trello (for planning)
* Heroku (for deployment)

## Approach

### User Stories

Once we had decided on the idea for the application, we created a series of user stories so that we would focus on usability and put the user first rather than focusing purely on the functionality we as developers wanted to include in the application.

* As a visitor, I want to be able to browse the teams and sports that exist so I can find one to join.
* As a visitor, I want to be able to see which sports and teams exist in my borough so I can narrow down my search to find a team to join.
* As a user, I want to be able to add my team to the database so people can find out more about us.
* As a user, I want to be able to update my Team's information if it changes.
* As a user, I want to be able to add a new sport if it doesn't exist yet.
* As a user, I don't want anyone else to be able to edit or delete the resources I've added, so that the information is secure.

### ERDs

We then created our Entity Relationship Diagram to pin down what data we would need, what fields each resource would need, and how they would all be linked.

As well as our User model, we planned to have three models which would link as Referenced data, as this would allow each document to exist independently and make it easier for editing and updating without impacting other items.

* **User** - simple model for user authentication
* **Team** - the most detailed model, and reference the relevant linked Sport & Borough via their IDs, as well as reference the ID of the User who created it.
* **Sport** - simple model referencing Teams & Boroughs via their IDs, and also referencing the ID of the user who created it.
* **Borough** - simple model referencing Teams & Sports via their IDs, and also referencing the ID of the user who created it.

As part of this we also decided how the User model would be linked to our three other models. We decided that including a 'Created by' field in each document referencing the ID of the user who created it would allow us to more easily implement authorisation and only allow that user to edit or delete those documents.

![Entity Relationship Diagram](/public/images/erd.png)

During the build, we decided to remove the Borough model in order to focus on delivering a more well-rounded and complete application (see more detail below in ‘process’).

### Wireframes

We then created our wireframes in Figma to have an idea of what the finished app could look like and get an idea of the structure and flow of our website. 

This helped decide how many views we'd need to create, and which views could be easily recycled from one model to another with just small changes.

**[View in Figma](https://www.figma.com/file/qybWULqUovDtWbJu2Ow1CT/London-Teams?node-id=0%3A1)**

Landing Page:
![Wireframe - Landing Page](/public/images/wireframes-01.png)

Teams/Sports/Boroughs index pages:
![Wireframe - index pages](/public/images/wireframes-02.png)

Sport/Borough details:
![Wireframe - Sport/Borough details](/public/images/wireframes-03.png)

Teams details - part 1:
![Wireframe - Teams details](/public/images/wireframes-04.png)

Teams details - part 2:
![Wireframe - Teams details](/public/images/wireframes-05.png)

User view when logged in:
![Wireframe - Logged in view](/public/images/wireframes-06.png)

User profile/resource view:
![Wireframe - User profile/resource Page](/public/images/wireframes-07.png)


### Project Planning

As this was our first pair project, we decided to keep a high level of communication throughout the project so we could stay on task and make quick decisions on keeping or cutting certain features in order to deliver our MVP application.

We used a Trello board to keep track of our tasks, our overall MVP application and also keep our user stories in mind.

![Trello board screenshot](/public/images/trello-01.png)

On our first day of planning, Richard and I agreed that through the project build we would start and end each day with a 30-minute stand-up on Zoom to review the tasks ahead and review our progress, led by me as Team Lead.

Throughout the build we used Git and GitHub for version control, and we decided to regularly push and pull our code together to get used to the team workflow and avoid potential Git issues or merge conflicts.

## Build Process

### Day 1 - Back-end set-up

Our first day of development started with some shared pair programming in order to set up our repository and workflow and also get the skeleton of our project structure up and running. 

I led on this as Team Lead, and we set up:

* GitHub and dev workflow.
* Express and middleware.
* `server.js` file and required dependencies.
* The start of our MVC architecture with a basic Index route, controller & view set-up
* Basic Team model, route, controller & view set-up, including each element of required CRUD functionality (Creating new records, Reading All and Individual records, Updating and Deleting records).

By sharing the role of lead coder back and forth throughout the morning, we were able to each have a hand in the project set-up and also get a feel for the pushing/pulling workflow on GitHub in order to stay up to date.

```
const mongoose = require('mongoose');
 
const teamSchema = mongoose.Schema({
   name: String,
   sports: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Sports'
   },
   borough: String,
   description: String,
   minAge: Number,
   level: String,
   contactEmail: String,
   contactPhone: String,
   address: String,
   createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
}, {
   timestamps: true
});
 
const Team = mongoose.model("Team", teamSchema);
 
module.exports = {Team};
```

The snippet above shows our final Team model, using Mongoose to create the schema and with our User and Sport models integrated as referenced data - this was added on Day 2, as per the description below.

We then worked separately to set up our remaining two models of Sports and Boroughs. We kept all our Models separate to start with to ensure the CRUD functionality was working correctly across the board. I took ownership of creating the Borough model and views, controller and routes files. 

### Day 2

In our morning stand-up we reviewed our ERD and planned models and discussed in greater detail exactly how the data would be referenced between the models. We decided at this point to remove the Borough model from our application, as it wasn’t essential to the full site functionality and would allow us to focus on ensuring the rest of the application worked well.

We replaced this with a pre-populated dropdown of central London boroughs to ensure consistency in how these were stored in the database, should we want to add functionality that would allow users to filter Sports or Teams by Borough.

I led a pair programming session in which we updated our Team and Sport models to accept referenced IDs correctly and ensure the CRUD functionality for each was still working (see code snippet above for final Team model).

The code snippet below shows the GET and POST requests for adding a Team once we had integrated the data referencing, as this required us to also find our existing sports to populate the dropdown of available sports for the team being edited. 

```
exports.teams_add_get = (req, res) => {
   Sports.find()
   .then((sports) => {
       res.status(200).render("teams/add", {sports});
   })
   .catch((err) => {
       console.log(err);
       res.send("Sorry there's an error")
   })
};
 
exports.teams_add_post = (req, res) => {
   let team = new Team(req.body);
   console.log(req.body)
   console.log(req.body.sports)
   team.save()
   .then(() => {
           Sports.findById(req.body.sports, (err, sports) =>{
               sports.teams.push(team);
               sports.save();
           })
       res.redirect("/teams/index");
   })
   .catch((err) => {
       console.log(err);
       res.send("Sorry there's an error")
   });
}
```

This is an extract from our Team Add view, including the JavaScript to loop over the existing Sports that were found via the GET request and use these to populate the Select element.

```
<div class="mb-3">
       <label for="sports" class="form-label">Sports</label>
       <select id="sports" name="sports" class="form-select" required>
           <option selected disabled hidden>Choose a Sport</option>
 
           <% sports.forEach(function(sports){ %>
           <option value="<%= sports._id%>"><%= sports.name%></option>
           <% }) %>
       </select>
       <div id="sportHelp" class="form-text">Can't find your sport? Add a new one using the button above.</div>
   </div>
```

In the afternoon we worked individually, with Richard adding Bootstrap and some simple CSS styling to our application while I reviewed and planned out the authentication and authorisation functionality in more detail.

### Day 3 - Authorisation and Authentication
This was a great opportunity to solidify my understanding of authorisation and authentication in express as team lead, and as Team Lead I took charge of leading our pair programming for the day to ensure that our code was clear and readable, and also taking the time to answer questions from Richard throughout the process, which helped be better understand the ins and outs of the set-up.

I first created our User model, key User functionality (sign up, sign in and logout) and secured our routes and navigation options behind the login. I also used Passport and Passport Local for authentication, and used Bcrypt to securely hash and store the password in our database.

The code snippet below shows how I used Bcrypt on the signup controller to hash the password and store the hashed password in the database.

```
exports.auth_signup_get = (req, res) => {
   res.status(200).render("auth/signup");
};
 
exports.auth_signup_post = (req, res) => {
   let user = new User(req.body);
   let hashedPassword = bcrypt.hashSync(req.body.password, salt);
   user.password = hashedPassword;
   user.save()
   .then(() => {
       res.redirect("/auth/signin");
   })
   .catch((err) => {
       console.log(err);
       res.send("Sorry, try again later")
   })
};
```

The below snippet shows where Passport was used for authentication in the signin POST request. Passport and Passport Local were configured in a separate helper file which was then required in the auth controller file.

```
exports.auth_signin_post =
   passport.authenticate("local", {
       successRedirect: "/",
       failureRedirect: "/auth/signin",
       failureFlash: "Invalid username or password.",
       successFlash: "You have signed in!"
   });
```

I also created a second helper file, named isLoggedIn, which could be required throughout the application which would check if a user was signed in - this then allowed us to secure certain routes and CUD functionality behind this check.

```
module.exports = (req, res, next) => {
   if (!req.user) {
       res.redirect("/auth/signin");
   }
   else {
       next();
   }
};
```
We continued to pair programme and created our final User functionality, which included including allowing a registered User to:
* change their password, using Bcrypt to check their current password against the one stored in the database and overwrite it with a new one on successful completion of the form (code snippet below).
* see their profile and the entries they had created.
* edit their profile.
* edit and delete only the entries they had created (not those created by others).
* see pop-up notifications for success & error messaging around form submissions for CRUD and authentication functionality, added using Connect Flash.

```
exports.auth_password_put = (req, res, next) => {
   var user = req.user;
   if (!bcrypt.compareSync(req.body.password, user.password)) {
       req.flash("error", "Your current password is incorrect!")
       res.redirect('/auth/password')
   } else if (req.body.newPassword !== req.body.newPasswordConfirm) {
       req.flash("error", "New password and password confirmation don't match!")
       res.redirect('/auth/password')
   } else {
       User.findByIdAndUpdate(req.body.id, req.body)
       .then(() => {
       let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
       user.password = hashedPassword;
       user.save(function(err){
           if (err) { next(err) }
               else {
                   res.redirect('/auth/profile');
               }
           })
       })
       .catch((err) => {
           console.log(err);
           res.send("Sorry there was an error");
       })
   }
};
```
At this point our app was now MVP ready and met all the technical requirements for the project.

### Day 4 - Front End & Deployment
With our technical requirements met, we agreed that this final day of the build would focus on styling the site with Bootstrap, making the site responsive, and deploying our near-final application to Heroku.

I worked on our homepage, user profile and forms, and also contributed to the index and detail pages so that we could ensure the styling and look of the site was uniform and consistent throughout.

The code snippet below shows how we looped over all the Teams in the database to create individual Bootstrap cards for each.

```
<h1 class="detailsHeader">All Teams</h1>
<div class="indexPage">
    <div class="index-container teams-container indexPages">
        <% teams.forEach(function(team) { %>
    
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title"><%= team.name%></h5>
                <h6 class="card-subtitle mb-2 text-muted"><%= team.sports.name%></h6>
                <p class="card-text"><%= team.description%></p>
                <p class="card-text">Minimum Age: <%= team.minAge%></p>
                <p class="card-text">Level: <%= team.level%></p>
                <a href="/teams/detail?id=<%=team.id%>" class="card-link">Find out more about <%= team.name%></a>
                </div>
            </div>
    
        <% }) %>
    </div>
</div>
```
We deployed the app to Heroku through the CLI, and spent the remainder of our build time making final styling adjustments (including adding in a final logo) and seeding the relevant data to our MongoDB cloud database. 

## Final Product

Homepage:
![London Teams - Homepage](/public/images/appscreenshot-02.png)

Teams Index:
![London Teams - Teams Index](/public/images/appscreenshot-03.png)

Sports Index:
![London Teams - Sports Index](/public/images/appscreenshot-04.png)

Profile page (and updated nav when logged in):
![London Teams - Profile page](/public/images/appscreenshot-05.png)

Add Sport:
![London Teams - Add Sport](/public/images/appscreenshot-06.png)

Add Team:
![London Teams - Add Team](/public/images/appscreenshot-07.png)

Sport detail:
![London Teams - Sport detail](/public/images/appscreenshot-08.png)

Team detail:
![London Teams - Team detail](/public/images/appscreenshot-09.png)

Update password:
![London Teams - Update password](/public/images/appscreenshot-10.png)

Sign up:
![London Teams - Sign up](/public/images/appscreenshot-11.png)

Sign in:
![London Teams - Sign in](/public/images/appscreenshot-12.png)

## Conclusions

### Wins

* Meeting all the project’s technical requirements by the end of Day 3, including the tricky password update functionality which I solved through research and extensive testing.
* Getting our existing Sports to appear as a dropdown in the Add Team form.
* Successfully implementing a wide range of Bootstrap components, as this was my first time working with a CSS Library.

### Challenges

* This was my first pair/group project, and it was an adjustment to work in a team rather than solo - it required regular and honest communication, particularly with me as Team Lead.
* It was also my first time working with Git as a member of a team, and the workflow took some getting used to. We were able to get around this by communicating and pushing/pulling our code regularly, and sharing the lead on pair programming so as to get used to all parts of the workflow.
* Getting to grips with Express was a real challenge. It was our first time working with a back-end framework and the syntax and MVC pattern was difficult to get used to at first, particularly when adding more complex functionality with which I wasn’t familiar, but it started to click by the end of the project.

### Bugs

* Deleting a Team removes them from the database but doesn't remove their ID from the related Sport’s ‘Teams’ array. I would have liked to fix this issue to avoid ending up with a bloated database or errors.
* We included an "image url" field in order to allow users to input the URL of an image hosted elsewhere (eg. Imgur) and then include that on the Sport or Team detail page, but we weren't able to fully implement this in time in our design.
* The navigation buttons are too close together when viewed on smaller devices.

### Future Improvements 

* When editing a Team, we removed the ability to edit the Sport played by that Team (for the reasons listed above re: arrays). We would like to fix this in future iterations.
* Integrating the third resource of Boroughs, and updating the Teams and Sports models and data accordingly to reference the Boroughs. 
* Allow users to filter the index pages - filter Teams by Sport/Borough, filter Sports by Borough and filter Borough by Sports.
* Fully implementing the image URL feature or going further and adding an image upload feature would be a great way to give the web app a real community spirit and make it feel crowd-sourced. 

### Key Learnings

* The importance of communication as a team - by having regular stand-ups and check-ins we were able to keep on top of our workload and ensure we were on track with the project. Richard was very open about the areas where he felt less confident, which meant we were able to tackle those areas as a pair rather than working in silos and falling behind on our timeline.
* It was really interesting to work on the back end of a web application for the first time and come to understand architectural patterns, routing and CRUD functionality. It definitely took a while to get used to the logic and syntax, particularly with all the middleware we added to the project, but by the end I was much more confident in my understanding of all the parts of the application.
