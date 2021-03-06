const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const yelp = require('yelp-fusion')
const config = require('./config/config').get(process.env.NODE_ENV);
const serveStatic = require("serve-static");
const path = require('path');

const app = express();

app.use(bodyParser.json());

// app.use(express.static('client/build'))

app.use(serveStatic(path.join(__dirname, '../client', 'dist')));
app.use(serveStatic(path.join(__dirname, 'dist')));
console.log(path.join(__dirname, '../client', 'dist'));

//const auth = 'Bearer '.concat(config.YELP_KEY);

const client = yelp.client(process.env.YELP_KEY);

// axios.get('https://api.yelp.com/v3/businesses/search?term=food&latitude=37.786882&longitude=-122.399972', { headers: { Authorization: auth }})
// 	.then(res => {
// 		console.log(res.data);
// 	})

app.get('/api/search', (req, res) => {
	let term = req.query.term;
	if (term === '') {
		term = 'food';
	}
	let latitude = req.query.latitude;
	let longitude = req.query.longitude;
	let price = req.query.price;
	let open_now = req.query.open_now;
	let distance = req.query.distance;

	client.search({
		term,
		latitude,
		longitude,
		limit: 50,
		price,
		open_now,
		radius: distance,
	}).then(response => {
		res.json(response.jsonBody);
	})

})

app.get('/api/search2', (req, res) => {
	let term = req.query.term;
	if (term === '') {
		term = 'food';
	}
	let location = req.query.location
	if (location === '') {
		location = "san francisco";
	}
	//let price = req.query.price;
	//let open_now = req.query.open_now;
	//let distance = req.query.distance;

	client.search({
		term,
		location,
		limit: 50,
		//price,
		//open_now,
		//radius: distance,
	}).then(response => {
		res.json(response.jsonBody);
	})
	.catch(e => {
		res.json(e.response);
	})

})

app.get('/api/business', (req, res) => {
	let id = req.query.id

	client.reviews(id).then(response => {
		res.json(response.jsonBody);
	})
})




const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`SERVER RUNNNING`)
})
