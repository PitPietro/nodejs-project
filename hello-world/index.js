const express = require('express')
const app = express()
const port = 5555

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// cd hello-world
// node index.js