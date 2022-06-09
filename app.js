const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Tenants = require('./model/tenant');

// DB
const dbURI = 'mongodb+srv://Fafyee:test-pelumi@hostel-tenants.uwsznbe.mongodb.net/hostel-tenants?retryWrites=true&w=majority'
// Connect DB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected to DB successfully'))
    .catch((err) => console.error(err));


// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Use static public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})


// Listen on PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));