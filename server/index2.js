const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students');

const studentSchema = new mongoose.Schema({
  name: String,
  birthDate: Date
});

const Student = mongoose.model('Student', studentSchema);

// Create
app.post('/students', async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
//   const student = new Student(req.body);
//   await student.save();
//   res.send(student);
});

// Read
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Update
app.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// Delete
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
