import querystring from "node:querystring";

// Configuration
const accessToken = "";
const mastodonBaseUrl = ""

const birthday = "1994-12-30 16:00:00"
const description = "%ageInDays% days old. CTO & tech-lead @ SiMedia.com // Tech enthusiast // Hacking around in JavaScript, Node.js, Vue.js, Serverless, GraphQL"

const birthdayDate = new Date(birthday);
const nowDate = new Date();
const difference = nowDate - birthdayDate;
const ageInDays = parseInt(difference / (1000 * 3600 * 24));
const preparedDescription = description.replace("%ageInDays%", ageInDays);

const response = await fetch(mastodonBaseUrl + "/api/v1/accounts/update_credentials", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${accessToken}`,
  },
  body: new URLSearchParams({
    note: preparedDescription,
  }),
});

console.log(response)