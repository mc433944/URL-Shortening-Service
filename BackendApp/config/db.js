const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const createDBConnection = async () => {
  try{
    mongoose.connect(db, {
      useNewUrlParser: true
    })
  }catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = createDBConnection