const express = require("express");
const { getPoll, postPoll } = require("../controllers/pollController");
const router = express.Router();

// ACTIVITY: Create routes that call controller functions when rrequested
router.get("/polls/id:id", pollController.getPoll);
router.get("/polls", pollController.getPoll);
router.post("/polls", pollController.postPoll);
router.post("/vote", pollController.postVote);

module.exports = router;
