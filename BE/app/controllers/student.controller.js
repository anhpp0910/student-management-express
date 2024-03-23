const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../services/student.services");

const getAllStudent = async (req, res) => {
  const studentList = await getAll();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found!");
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await getById(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found!");
  }
};

const createStudent = async (req, res) => {
  let student = req.body;
  const newStudent = await create(student);
  res.status(201).send(newStudent);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = req.body;
  const studentUpdated = await update(id, student);
  if (studentUpdated) {
    res.status(200).send(studentUpdated);
  } else {
    res.status(404).send("Not Found!");
  }
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const studentDelete = await deleteById(id);
  if (studentDelete) {
    res.status(200).send(studentDelete);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
};
