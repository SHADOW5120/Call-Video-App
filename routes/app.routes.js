// API routing
const meetingController = require("../controllers/meeting.controller");

const express = require("express");
const router = express.Router();

router.post("/meeting/start", meetingController.startMeeting);
router.post("/meeting/join", meetingController.checkMeetingExists);

// this is optional cuz just for check if api is working fine or not
router.get("/meeting/get", meetingController.getAllMeetingUsers);

module.exports = router;