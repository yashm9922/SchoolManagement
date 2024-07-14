import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:3000/students');
    setStudents(response.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingStudent) {
      await axios.put(`http://localhost:3000/students/${editingStudent._id}`, { name, birthDate });
    } else {
      await axios.post('http://localhost:3000/students', { name, birthDate });
    }

    setName('');
    setBirthDate('');
    setEditingStudent(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setName(student.name);
    setBirthDate(student.birthDate.slice(0, 10));
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
        <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">
          {editingStudent ? 'Edit Student' : 'Add Student'}
        </h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-900 dark:text-gray-300" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-900 dark:text-gray-300" htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button type="submit" className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded">
          {editingStudent ? 'Update' : 'Create'}
        </button>
      </form>
      <ul className="mt-6">
        {students.map(student => (
          <li key={student._id} className="flex justify-between items-center mb-2">
            <span className="text-gray-900 dark:text-gray-100">{student.name} - {new Date(student.birthDate).toLocaleDateString()}</span>
            <div>
              <button onClick={() => handleEdit(student)} className="bg-yellow-500 dark:bg-yellow-600 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button onClick={() => handleDelete(student._id)} className="bg-red-500 dark:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentForm;
