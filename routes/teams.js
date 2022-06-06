const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: true}));

const teamCtrl = require("../controllers/teams")

router.get("/teams/index", teamCtrl.teams_index_get) // api call is index_get
router.get("/teams/add", teamCtrl.teams_add_get)
router.post("/teams/add", teamCtrl.teams_add_post)

module.exports = router;