import api from "./api";

const getListStudents = () => api.get(api.url.students).then((res) => res.data);

const getIdStudent = (id) =>
  api.get(`${api.url.students}/${id}`).then((res) => res.data);

const createStudent = (data) =>
  api.post(api.url.students, data).then((res) => res.data);

const updateStudent = (id, data) =>
  api.put(`${api.url.students}/${id}`, data).then((res) => res.data);
  
const deleteStudent = (id) =>
  api.delete(`${api.url.students}/${id}`).then((res) => res.data);
  
const studentService = {
  getListStudents,
  get: getIdStudent,
  add: createStudent,
  update: updateStudent,
  delete: deleteStudent,
};

export default studentService;
