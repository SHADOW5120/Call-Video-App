const meetingServices = require("../services/meeting.service");

exports.startMeeting = (req, res, next) => {
    // take hostId and hostName
    const {hostId, hostName} = req.body;
    
    // create a model
    var model = {
        hostId: hostId,
        hostName: hostName,
        startTime: Date.now()
    };

    meetingServices.startMeeting(model, (error, results) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results.id,
        });
    })
}

exports.checkMeetingExists = (req, res, next) => {
    // check if meetingId is existed or not by querying it
    const {meetingId} = req.query;

    meetingServices.checkMeetingExists(meetingId, (error, results) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results.id,
        });
    })
}

exports.getAllMeetingUsers = (req, res, next) => {
    // check if meetingId is existed or not by querying it
    const {meetingId} = req.query;

    meetingServices.getAllMeetingUsers(meetingId, (error, results) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results.id,
        });
    })
}