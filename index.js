// API routing 2
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const http = require("http");
const server = http.createServer(app);

// meeting-server
// initMeetingServer(server) form meeting-server 3
const {initMeetingServer} = require("./meeting-server");
initMeetingServer(server);
//

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB)
.then(() => {
    console.log("Database Connected");
})
.catch((error) => {
    console.log("Database Can't be connected:", error.message);
});

app.use(express.json());
app.use("/api", require("./routes/app.routes"));

server.listen(process.env.port || 4000, function () {
    console.log("Ready to Go!");
});

// Done setting up meeting server that used for communicating
// the webrtc with nodejs and flutter app via socket.io