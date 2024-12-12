const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const users = {
  user1: { username: 'user1', password: '123' } 
};

app.get('/login', (req, res) => req.session.loggedIn ? res.redirect('/dashboard') : res.render('login'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    req.session.loggedIn = true;
    req.session.username = username;
    return res.redirect('/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

app.get('/dashboard', (req, res) => req.session.loggedIn ? 
  res.send(`Welcome ${req.session.username}, <a href="/logout">Logout</a>`) : 
  res.redirect('/login')
);

app.get('/logout', (req, res) => req.session.destroy(() => res.redirect('/login')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));