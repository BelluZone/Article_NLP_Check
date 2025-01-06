var path = require('path');
var aylien = require("aylien-news-api")
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
var textapi = new aylien({
    application_id: process.dotenv.API_ID,
    application_key: process.dotenv.API_KEY
});


app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route

app.post('/sendText', function (req, res) {
    console.log(req.body);

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(error => console.log('error', error));
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

// Oauth authentication with user credentials
const username = "username"
const password = "password"

// Requesting a bearer token from oauth endpoint
// Review the docs for detailed authentication workflows docs.aylien.com/newsapi/v6

async function getToken() {
    return await fetch("https://api.aylien.com/v1/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: 'Basic ' + btoa('username:password'),
            grant_type: "password",
        }
    })
}

const token = await getToken();

// Passing the token as a header with App Id
const headers = { "Authorization": "Bearer {}".replace('{}', token), "AppId": "4e25cdc6" };
const url = 'https://api.aylien.com/v6/news/stories?aql=entities:({{surface_forms.text:"pyramid computer" AND overall_prominence:>=0.65}}) AND sentiment.title.polarity:(negative neutral positive)&cursor=*&published_at.end=NOW&published_at.start=NOW-7DAYS/DAY';

const requestOptions = {
    method: "GET",
    headers,
    redirect: "follow"
};