const { Student } = require("../models");

//  data
let studentList = [
  {
    id: "1231335356",
    fullName: "Nguyễn Văn Bưởi",
    age: 17,
    numberClass: 11,
  },
  {
    id: "12312576657",
    fullName: "Trần Thị Chuối",
    age: 15,
    numberClass: 9,
  },
  {
    id: "1231234575645",
    fullName: "Lê Thị Mận",
    age: 18,
    numberClass: 12,
  },
];

const getAll = async () => {
  const studentList = await Student.findAll();
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

const getById = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    return student;
  } else {
    return false;
  }
};

const create = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const update = async (id, student) => {
  const studentUpdate = await getById(id);
  if (studentUpdate) {
    studentUpdate.fullName = student.fullName;
    studentUpdate.age = student.age;
    studentUpdate.numberClass = student.numberClass;
    const studentUpdated = await studentUpdate.save();
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const studentDelete = await getById(id);
  if (studentDelete) {
    await Student.destroy({
      where: {
        id,
      },
    });
    return studentDelete;
  } else {
    return false;
  }
};

module.exports = { getAll, getById, create, update, deleteById };
