import express from 'express';
import mongoose from 'mongoose';
import studentsModel from './models/students.js';
import { students } from './data/students.js';
import coursesModel from './models/courses.js';

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const username = 'david';
const password = 'vM5WDR4VmP6B5ry4';

const connection = mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority`)
app.use(express.json());

app.get('/students/insertion', async (req, res) => {
  let result = await studentsModel.insertMany(students)
  res.send({ result })
})

app.get('/students/insertOne', async (req, res) => {
  let result = await studentsModel.create(
    {
      "first_name": "Ingeborg",
      "last_name": "Lowings",
      "email": "ilowings1@unesco.org",
      "gender": "Female"
    }
  )
  res.send({ result })
})

app.get('/courses/insertOne', async (req, res) => {
  const result = await coursesModel.create(
    {
      "title": "Mate",
      "description": "MongoDB"
    }
  );
  res.send({ result });
})

app.get('/students/insertCourse', async (req, res) => {
  const result = await studentsModel.updateOne(
    { _id: "649b84931508e95922dc8ba4" },
    { $push: { courses: { course: "649b8602e25935aab7be101f" } } }
  );
  res.send({ result });
});

app.get('/students', async (req, res) => {
  const result = await studentsModel.find();
  res.send({ students: result })
})

app.get('/students/:name', async (req, res) => {
  const name = req.params.name;
  let result = await studentsModel.findOne({ first_name: name });
  res.send({ result })
})


app.post('/students', async (req, res) => {
  const { nombre, apellido, edad, dni, curso, nota } = req.body;
  if (!nombre || !apellido || !edad || !dni || !curso || !nota) return res.status(400).send({ error: "Incomplete values" });
  let user = {
    nombre,
    apellido,
    edad,
    dni,
    curso,
    nota
  }
  let result = await studentsModel.create(user);
  res.send({ result })
})

app.put('/students/:sid', async (req, res) => {
  const id = req.params.sid;
  const UpdateStudent = req.body;
  let result = await studentsModel.updateOne({ _id: id }, { $set: UpdateStudent });
  res.send({ result });
})

app.delete('/students/:sid', async (req, res) => {
  const id = req.params.sid;
  let result = await studentsModel.deleteOne({ _id: id });
  res.send({ result })
})