const express = require('express');
const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.render('index');
// });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
