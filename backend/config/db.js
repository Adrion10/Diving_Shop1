const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then((con) =>
      console.log(`MongoDB database connected with ${con.connection.name}`)
    );
};
module.exports = connectDB;
