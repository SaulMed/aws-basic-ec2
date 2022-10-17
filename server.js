const express = require('express');

const app = express();

app.set('PORT', 3000 || process.env.PORT);

app.get('/', (req, res) => {
    res.send("Hello world with express.")
});

app.listen(app.get('PORT'), (req, res) => {
    console.log("Server on port " + app.get('PORT'))
})