const qs = require("querystring");
const OAuth = require("oauth");

// Configuration
const apiKey = "API_KEY";
const apiSecret = "API_SECRET";
const accessToken = "ACCESS_TOKEN";
const accessTokenSecret = "ACCESS_TOKEN_SECRET";
const birthday = "YYYY-MM-DD HH:MM:SS"
const description = "%ageInDays% days old. Can't we all just live long and prosper, while the force is with us?"

// Edigint below is reserved only for the brave ones

var oauth = new OAuth.OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  apiKey,
  apiSecret,
  "1.0A",
  null,
  "HMAC-SHA1"
);

const birthdayDate = new Date(birthday);
const nowDate = new Date();
const difference = nowDate - birthdayDate;
const ageInDays = parseInt(difference / (1000 * 3600 * 24));
const preparedDescription = qs.escape(description.replace("%ageInDays%", ageInDays));

return new Promise((resolve, reject) => {
  oauth.post(
    "https://api.twitter.com/1.1/account/update_profile.json?description=" + preparedDescription,
    accessToken,
    accessTokenSecret,
    null,
    null,
    function (e) {
      if (e) reject(e);
      resolve();
    });
})