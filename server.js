const express = require('express');
const app = express();
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());;
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(__dirname + '/public'));

// app.get('/', (request, response) => {
// });

app.get('/json', (request, response) => {
  response.status(200).sendFile(__dirname + '/challenge.json');
});

app.get('/sunsets', (request, response) => {
  response.sendFile(__dirname + '/public/sunsets.html');
});

app.use((request, response, next) => {
  response.status(404).send('Sorry, the path you entered does not exist.')
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});