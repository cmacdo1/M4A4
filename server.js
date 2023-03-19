const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Connecting to the database
const mongoose = require('mongoose');
const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

//asynchronous connection
mongoose.connect(MONGO_DATA_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  /*
  useCreateIndex: true 
  
  Got error that this is not supported. Have commented it out.  Code/App works as expected once useCreateIndex is removed.

  Currently using "mongoose": "^7.0.1"
  
  Found the solution on Mongodb community forum (https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048) that states:
  
  The useCreateIndex option has been deprecated for a while and removed as of the Mongoose 6 release per No More Deprecation Warning Options:

    useNewUrlParser , useUnifiedTopology , useFindAndModify , and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .

  The solution is to remove any unsupported options from your code.
  */
  }).then(con => {
    console.log(con.connection); //Logs connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`); //Logs connection properties
  }).catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
