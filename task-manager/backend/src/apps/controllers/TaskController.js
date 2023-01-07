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

    async createTask(request, response) {
        try {
            const newTask = await Task.create(request.body);
            response.status(200).json(newTask);
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({
                    message: error,
                });
            }
        }
    }

    async getTask(request, response) {
        try {
            const { id: taskId } = request.params;
            const task = await Task.findOne({ _id, taskId });
            // if (!task) {
            //     return ;
            // }

            response.status(200).json({ task });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json();
            }
        }
    }

    async deleteTask(request, response) {
        try {
            const { id: taskId } = request.params;
            const task = await Task.findOneAndDelete({ _id: taskId });
            // if (!task) {
            //     return;
            // }
            response.status(200).json({ task });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }
    async updateTask(request, response) {
        try {
            const { id: taskId } = request.params;
            const task = await Task.findOneAndUpdate(
                {
                    _id: taskId,
                },
                request.body,
                {
                    new: true,
                    runValidators: true,
                }
            );
            // if (!task) {
            //     return;
            // }
            response.status(200).json({ task });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({
                    message: error,
                });
            }
        }
    }
}

module.exports = new TaskController();
