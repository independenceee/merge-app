const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

const connectMongoDB = async function () {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};

module.exports = connectMongoDB;
