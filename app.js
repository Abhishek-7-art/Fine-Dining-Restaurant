//Adding Relevant modules..
const Express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = Express();
const request = require("superagent");
//const request=require("request");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(Express.static("public"));



app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Server started at port 3000");
})
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

    /*res.write(__dirname+"/booktable.html");
    res.write(__dirname+"/menu.html");
    res.write(__dirname+"/rating.html");*/
})
app.get("/index.html",function(req,res)
{
  res.sendFile(__dirname +"/signup.html");
  console.log("sent");


})
app.get("/index.html",function(req,res)
{
  res.sendFile(__dirname +"/booktable.html");
  console.log("sent");


})
app.get("/index.html",function(req,res)
{
  res.sendFile(__dirname +"/menu.html");
  console.log("sent");


})
app.get("/index.html",function(req,res)
{
  res.sendFile(__dirname +"/rating.html");
  console.log("sent");


})
app.post("/", function(req, res) {
  /*res.sendFile(__dirname+"booktable.html");
  res.sendFile(__dirname+"menu.html");
  res.sendFile(__dirname+"rating.html");
*/

  const fname = req.body.FName;
  const lname = req.body.LName;
  const emailid = req.body.email;
  const data = {
    members: [{

      email_address: emailid,
      status: "subscribed",
      mergefields: {
        FNAME: fname,
        LNAME: lname

      }
    }]

  };
  const jsonData = JSON.stringify(data);
  const url = "https://us18.api.mailchimp.com/3.0/lists/dea454dab8";
  const options = {
    method: "POST",
    auth: "abhishek7:75abf14e9a4166ecdc91551ea56d786f-us18"
  }
const request = https.request(url, options, function(response) {
    response.on("data", function(data) {
      console.log(JSON.parse(data));
      if(response.statusCode===200)
      {
        res.sendFile(__dirname+"/success.html");
      }
      else {
        res.sendFile(__dirname+"/failure.html");

      }
    })
  })

request.write(jsonData);
request.end();
});
app.post("/failure.html",function(req,res)
{
  res.redirect("/");
})
//APIkey
//75abf14e9a4166ecdc91551ea56d786f-us18

//Listid
//dea454dab8
//http://mailchimp.us8.list-manage.com/subscribe/post" method="POST
//https://us18.api.mailchimp.com/3.0/lists/dea454dab8/members/75abf14e9a4166ecdc91551ea56d786f-us18
