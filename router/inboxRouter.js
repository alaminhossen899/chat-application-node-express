/** start external imports */
const express = require("express");
/** end external imports */


/** start internal imports */
const {inboxForm} = require("../controller/InboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
/** end internal imports */


/** create router and use in app.js file for get globally */
const router = express.Router();

/** Route List */
router.get("/",decorateHtmlResponse("Inbox"),checkLogin,inboxForm); // decorateHtmlResponse("Inbox") this is for title set and local.html = true


module.exports = router;