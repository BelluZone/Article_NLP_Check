var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Variables for url and api key

app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});

app.get('/api/test', function (req, res) {
    res.send("Just a Test");
});

app.post('/api/getSentiment', async function (req, res) {
    const { url } = req.body;
    console.log(url);
    
    try {
        const formdata = new FormData();
        formdata.append("key", process.env.API_KEY);
        formdata.append("url", url);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        const fetchResponse = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const responseBody = await fetchResponse.json();

        console.log(fetchResponse, responseBody);
        
        res.status(fetchResponse.status).send(responseBody); // Send the response back to the client
    } catch (error) {
        console.error('Error fetching sentiment:', error);
        res.status(500).send({ error: 'An error occurred while fetching sentiment.' });
    }
});

// POST Route

// Designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!');
});