const { append } = require("express/lib/response");

//do get request api
exports.index_get = (req, res) =>{
    res.status(200).render('home/index');
}

