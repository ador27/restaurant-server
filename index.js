const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Delhi Restaurant Server is RUNNING');
})

app.listen(port, () => {
    console.log(`Delhi Restaurant Server is ON ${port}`);
})