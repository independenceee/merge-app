require("dotenv").config();
const express = require("express");
const { connectMongoDB } = require("./configs/databases");
const router = require("./routes/index.routes");

const app = express();

app.use(express.json());

router(app);
const PORT = process.env.PORT || 3000;
const start = async function () {
    try {
        await connectMongoDB();
        await app.listen(PORT, function () {
            console.log(`http://localhost${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};
(function () {
    start();
})();
