const express = require('express');

const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

const app = express();

app.use(expressLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");

// create port
const PORT = process.env.PORT;


// Import Routes
const indexRouter = require("./routes/index");
const teamsRouter = require("./routes/teams");
const sportsRouter = require("./routes/sports");

// Mount Routes
app.use("/", indexRouter);
app.use("/", teamsRouter);
app.use("/", sportsRouter);



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