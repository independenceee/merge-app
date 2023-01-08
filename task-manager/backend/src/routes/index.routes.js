const taskRouter = require("./tasks.routes");

const router = function (app) {
    app.use("/task", taskRouter);
};

module.exports = router;
