const express = require("express");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exprots = router;
