const express = require("express");
const cors = require('cors');
const app = express();

// Habilitando solicitações do front-end
app.use(cors())

const listWords = require('./routes/routes')
app.use('/listword', listWords);

app.listen(2000, () => {
    console.log('Serve on! localhost:2000')
})

