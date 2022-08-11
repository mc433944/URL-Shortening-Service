const express = require('express');
const app = express();
const createDBConnection = require('./config/db');
const cors = require('cors');
const port = 3001;

app.use(express.json({ extended: false}));
createDBConnection();
app.use(cors());
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/shortenUrl'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})