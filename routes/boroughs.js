const express = require('express');
const router = express.Router();
var methodOverride = require("method-override");

router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const boroughCtrl = require("../controllers/boroughs");

router.get("/boroughs/index", boroughCtrl.boroughs_index_get); // api call is index_get
router.get("/boroughs/add", boroughCtrl.boroughs_add_get);
router.post("/boroughs/add", boroughCtrl.boroughs_add_post);
router.get("/boroughs/detail", boroughCtrl.boroughs_details_get);
router.get("/boroughs/delete", boroughCtrl.boroughs_delete_get);
router.get("/boroughs/edit", boroughCtrl.boroughs_edit_get);
router.put("/boroughs/update", boroughCtrl.boroughs_edit_put);

module.exports = router;