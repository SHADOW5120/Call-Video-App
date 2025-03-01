// API model
// import mongoose
const mongoose = require ("mongoose");
// call Schema property of moongose, but not use below :))
const {Schema} = mongoose;

const meetingUser = mongoose.model (
    // name of table
    "MeetingUser",
    // fields
    mongoose.Schema ({
        socketId: {
            type: String,
        },
        meetingID: {
            // id that created randomly by mongoose
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting",
        },
        userId: {
            type: String,
            required: true,
        },
        joined: {
            type: Boolean,
            required: true,
        },
        isAlive: {
            type: Boolean,
            required: true,
        },
    },
    // createAt and updateAt
    {timestamps: true})
);

// import for other moduls to use
module.exports = {
    meetingUser
}