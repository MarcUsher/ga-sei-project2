const express = require('express');
const router = express.Router();
var methodOverride = require("method-override"); //to solve PUT issue

//Body Parser
router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const sportCtrl = require("../controllers/sports");

router.get("/sports/index", sportCtrl.sports_index_get); // api call is index_get
router.get("/sports/add", sportCtrl.sports_add_get);
router.post("/sports/add", sportCtrl.sports_add_post);
router.get("/sports/detail", sportCtrl.sports_details_get);
router.get("/sports/delete", sportCtrl.sports_delete_get); // ??? does user delete or admin
router.get("/sports/edit", sportCtrl.sports_edit_get);
router.put("/sports/update", sportCtrl.sports_edit_put);

module.exports = router;