import 'package:shared_preferences/shared_preferences.dart';
import 'package:uuid/uuid.dart';

// use uuid here - universally unique identifier
var uuid = const Uuid();

// funtion to load user id
Future<String> loadUserId() async {
  SharedPreferences preferences = await SharedPreferences.getInstance();

  var userId;

  // check here if you have shared preferences for this user id
  // then getting it from shared preferences and generating a new id
  if (preferences.containsKey("userId")) {
    userId = preferences.getString("userId");
  } else {
    userId = uuid.v4();
    preferences.setString("userId", userId);
  }

  return userId;
}
