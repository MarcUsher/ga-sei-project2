const express = require('express');
const router = express.Router();
var methodOverride = require("method-override");
const isLoggedIn = require('../helper/isLoggedIn');

router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const teamCtrl = require("../controllers/teams");

router.get("/teams/index", teamCtrl.teams_index_get); // api call is index_get
router.get("/teams/add", isLoggedIn, teamCtrl.teams_add_get);
router.post("/teams/add", teamCtrl.teams_add_post);
router.get("/teams/detail", teamCtrl.teams_details_get);
router.get("/teams/delete", isLoggedIn, teamCtrl.teams_delete_get);
router.get("/teams/edit", isLoggedIn, teamCtrl.teams_edit_get);
router.put("/teams/update", teamCtrl.teams_edit_put);

module.exports = router;