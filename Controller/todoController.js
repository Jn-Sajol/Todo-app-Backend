const todoModel = require("../Model/todoModel");

const getalltask = async (req, res) => {
  try {
    const tasks = await todoModel.find({});
    if (!tasks || tasks.length < 0) {
      return res.status(404).json({
        success: false,
        message: "sorry cant find any data there",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully Getting all data",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There are server error occured",
      error: error,
    });
  }
};

const getsigleTask = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const task = await todoModel.findById(id);
    // console.log(typeof(task))
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "sorry cant find any data there",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully Getting data",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There are server error occured",
      error: error,
    });
  }
};

const createtask = async (req, res) => {
  try {
    const task = req.body;
    const saveToDb = await todoModel.create(task);
    if (!saveToDb) {
      return res.status(404).json({
        success: false,
        message: "sorry cant create task",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully created Task",
      data: saveToDb,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There are server error occured",
      error: error,
    });
  }
};

const updatetask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskFromBody = req.body;
    // console.log(id)
    const task = await todoModel.findByIdAndUpdate(id, taskFromBody);
    console.log(task);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "sorry cant find any data there",
      });
    }
    // const updateTask = await todoModel.findByIdAndUpdate
    res.status(200).json({
      success: true,
      message: "Successfully updateing data",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There are server error occured",
      error: error,
    });
  }
};

const deletetask = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const task = await todoModel.findOneAndDelete(id);
    // console.log(task);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "sorry cant find any data there",
      });
    }
    // const updateTask = await todoModel.findByIdAndUpdate
    res.status(200).json({
      success: true,
      message: "Successfully deleting data data",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There are server error occured",
      error: error,
    });
  }
};

module.exports = {
  getalltask,
  getsigleTask,
  createtask,
  updatetask,
  deletetask,
};
