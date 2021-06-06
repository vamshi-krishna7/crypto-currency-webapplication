const mongooose = require('mongoose');

const connectDb = async () => {
    await mongooose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }, console.log('mongoDB connected'));
}

module.exports = connectDb;