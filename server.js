const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const email = req.body.email;
    const acceptsEmails = req.body.acceptsEmails;

    if (!email) {
        return res.status(400).send('Email is required!');
    }

    console.log('Email:', email);
    console.log('Accepts Email:', acceptsEmails);

    res.redirect('/thank-you');
});

app.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thank-you.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
