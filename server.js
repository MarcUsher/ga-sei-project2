const express = require('express');

const app = express();

// create port
const PORT = 3000;

app.listen(PORT, () => {
    console.log('listening on port 3000')
})


// create mongo db
const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/london_teams", {
    useNewUrlParser:true,
    useUnifiedTopology:true}, ()=> {
        console.log('connected to london_teams db')
    }
);


