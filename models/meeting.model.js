// models -> services -> controller -> routing -> meeting server
// API model
const mongoose = require("mongoose");
const {Schema} = mongoose;

const meeting = mongoose.model (
    "Meeting",
    mongoose.Schema ({
        hostId: {
            type: String,
            required: true,
        },
        hostName: {
            type: String,
            required: false,
        },
        startTime: {
            type: Date,
            required: true,
        },
        // users those participate in the meeting
        meetingUsers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MeetingUser",
            }
        ]
    }, {
        toJSON: {
            // tranform data to json type (map) like music project
            transform: function(doc, ret){
                ret.id = ret._id.toString(),
                // not want to expose _id for user --> remove
                delete ret._id;
                // not useful --> remove
                delete ret.__v;
            }
        }
    },
    {timestamps: true})
);

module.exports = {
    meeting
}