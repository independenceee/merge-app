const { Task } = require("../models");

class TaskController {
    async getAllTasks(request, response) {
        try {
            const tasks = await Task.find({});
            response.status(200).json(tasks);
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }
}

module.exports = new TaskController();
