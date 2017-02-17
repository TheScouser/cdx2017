const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
var session = require('cookie-session');
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

app.use(session({
  name: 'sessionId',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
          httpOnly: true,
          path: '/',
          expires: expiryDate
          }
  })
);

app.use(helmet());
app.use(express.static('./build'));

app.get('/*',function(req, res){
	res.sendFile(path.join(__dirname, './build', 'index.html'));
})

app.listen(3000);