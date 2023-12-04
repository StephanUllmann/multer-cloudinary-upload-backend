const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB connected to: ${connect.connection.name}`.green);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
