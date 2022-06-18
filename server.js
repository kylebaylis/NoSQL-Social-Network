const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// logs mongo queries that are executed
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Now connected on localhost:${PORT}`));