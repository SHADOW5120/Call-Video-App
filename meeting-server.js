// meeting-server 3
const meetingHelper = require("./utils/meeting-helper");
const { MeetingPayLoadEnum } = require("./utils/meeting-payload.enum");

function parseMessage(message) {
    try {
        const payload = JSON.parse(message);
        return payload;
    } catch (error) {
        return { type: MeetingPayLoadEnum.UNKNOWN };
    }
}

function listenMessage(meetingId, socket, meetingServer) {
    socket.on('message', (message) => handMessage(meetingId, socket, meetingServer));
}

function handMessage(meetingId, socket, message, meetingServer) {
    var payload = "";
    if (typeof message === 'string') {
        payload = parseMessage(message);
    }
    else {
        payload = message;
    }

    switch (payload.type) {
        case MeetingPayLoadEnum.JOIN_MEETING:
            meetingHelper.joinMeeting(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.CONNECTION_REQUEST:
            meetingHelper.forwardConnectionRequest(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.OFFER_SDP:
            meetingHelper.forwardOfferSDP(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.ICECANDIDATE:
            meetingHelper.forwardIceCandidate(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.ANSWER_SDP:
            meetingHelper.forwardAnswerSDP(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.JOINED_MEETING:
            meetingHelper.joinMeeting(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.LEAVE_MEETING:
            meetingHelper.userLeft(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.END_MEETING:
            meetingHelper.endMeeting(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.VIDEO_TOGGLE:
        case MeetingPayLoadEnum.AUDIO_TOGGLE:
            meetingHelper.forwardEvent(meetingId, socket, meetingServer, payload)
            break;
        case MeetingPayLoadEnum.UNKNOWN:
            break;
        default:
            break;
    }
}

function initMeetingServer(server) {
    const meetingServer = require("socket.io")(server);

    meetingServer.on('connection', socket => {
        const meetingId = socket.handshake.query.id;

        listenMessage(meetingId, socket, meetingServer);
    })
}

module.exports = {
    initMeetingServer
}