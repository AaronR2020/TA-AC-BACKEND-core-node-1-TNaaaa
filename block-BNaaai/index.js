var url = require("url");

const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl,parsedUrl.pathname,parsedUrl.query);

const google=url.parse("https://www.google.com?query=cats")
console.log(google);