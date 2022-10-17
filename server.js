const express = require('express');

const app = express();

app.set('PORT', 3000 || process.env.PORT);

app.get('/', (req, res) => {
    res.send("<h1>Hola desde express, con AWS - EC2</h1>")
});

app.listen(app.get('PORT'), (req, res) => {
    console.log("Server on port " + app.get('PORT'))
})