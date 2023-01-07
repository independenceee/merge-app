const taskRouter = require("./tasks.routes");

const router = function (app) {
    app.use("/api/v1/task");
};

module.exports = router;
