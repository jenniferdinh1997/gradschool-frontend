const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("connected", funciton() {
//     console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true
        });
        console.log("MongoDB connected");
    } catch(err) { 
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;