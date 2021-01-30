const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/static_global'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/admissions', (req, res) => {
  res.render('admissions');
});

app.get('/administration', (req, res) => {
  res.render('administration');
});

app.get('/events', (req, res) => {
  res.render('events');
});

app.get('/notice-board', (req, res) => {
  res.render('notice_board');
});

app.get('/contact-us', (req, res) => {
  res.render('contact_us');
});

app.get('/covid19', (req, res) => {
  res.render('covid19');
});

app.get('/principal', (req, res) => {
  res.render('principal');
});
app.get('/vice-chairman', (req, res) => {
  res.render('vice-chairman');
});
app.get('/admin-officer', (req, res) => {
  res.render('admin-officer');

  // res.render('admin-officer');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})