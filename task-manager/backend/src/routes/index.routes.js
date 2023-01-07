const taskRouter = require("./tasks.routes");

const router = function (app) {
    app.use("/api/v1/task", taskRouter);
};

module.exports = router;
