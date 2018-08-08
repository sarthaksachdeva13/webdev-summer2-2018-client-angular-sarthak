//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/webdev-summer2-2018-client-angular-sarthak'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/webdev-summer2-2018-client-angular-sarthak/index.html'));
});

console.log("PORT " , process.env.PORT);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);

