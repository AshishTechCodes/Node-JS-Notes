// npm install express express-session

const express = require('express');
const session = require('express-session');

const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key', // Used to sign the session ID cookie
  resave: false,              // Forces the session to be saved back to the session store
  saveUninitialized: true,    // Forces a session that is "uninitialized" to be saved
  cookie: { secure: false }   // Set to true if using HTTPS
}));

app.get('/', (req, res) => {
  // Set a session variable
  req.session.user = 'Ashish Gupta';
  res.send('Session variable set');
});

app.get('/session', (req, res) => {
  // Access a session variable
  res.send(`Session variable: ${req.session.user}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});