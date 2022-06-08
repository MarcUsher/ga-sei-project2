const express = require('express');

const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

const app = express();

app.use(expressLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");

// create port
const PORT = process.env.PORT;

// add passport auth code:
let session = require('express-session')
let passport =require('./helper/ppConfig');
app.use(session({
    secret: process.env.SECRETE,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge:3600000} 

}))


// Import Routes
const indexRouter = require("./routes/index");
const teamsRouter = require("./routes/teams");
const sportsRouter = require("./routes/sports");
const boroughRouter = require("./routes/boroughs")

// Mount Routes
app.use("/", indexRouter);
app.use("/", teamsRouter);
app.use("/", sportsRouter);
app.use("/", boroughRouter);



app.listen(PORT, () => {
    console.log('listening on port 3000')
})


// create mongo db
const mongoose =require('mongoose');

mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true}, ()=> {
        console.log('connected to london_teams db')
    }
);