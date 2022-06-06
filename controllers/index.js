const { append } = require("express/lib/response");

//do get request api
exports.index_get = (req, res) =>{
    res.render('home/index');
}

