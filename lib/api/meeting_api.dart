import 'dart:convert';
import 'package:callapp/utils/user.utils.dart';
import 'package:http/http.dart' as http;

// use your ip address of your system
// in cmd, type: ipconfig
// Look for the IPv4 Address
String MEETING_API_URL = "192.168.2.8:4000/api/meeting";
var client = http.Client();

// create function to start meeting
Future<http.Response?> startMeeting() async {
  Map<String, String> requestHeaders = {'Content-Type': 'application/json'};

  var userId = await loadUserId();
  var response = await client.post(
    Uri.parse('$MEETING_API_URL/start'),
    headers: requestHeaders,
    body: jsonEncode({'hostId': userId, 'hostName': ''}),
  );

  if (response.statusCode == 200) {
    return response;
  } else {
    return null;
  }
}

// function to response to join meeting
Future<http.Response> joinMeeting(String meetingId) async {
  var response =
      await http.get(Uri.parse('$MEETING_API_URL/join?meetingId=$meetingId'));

  if (response.statusCode >= 200 && response.statusCode <= 400) {
    return response;
  }

  throw UnsupportedError('Not a valid Meeting');
}
