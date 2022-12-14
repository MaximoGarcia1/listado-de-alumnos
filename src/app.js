const express = require('express');
const {connectDB} = require ('./database')
connectDB()
const app = express();
const cors = require('cors')
app.use(express.json())  
const controllers = require('./controllers');
const verifyToken = require('../middlewares/verifyToken');
const cursosCtrl = require ('./controllers/cursos.controller')
const StudentCtrl = require('./controllers/student.controller')
const registerUser = require('./controllers/register')
const loginUser = require('./controllers/login')


app.set('port', process.env.PORT || 4000) 
app.get('/', (req,res)=>res.send('h'))
app.get('/api/user',cors(), verifyToken, controllers.getUserByID)
app.post('/api/user/cursos/:_id', cors(), cursosCtrl.createCursos)
app.get('/api/user/:_id/cursos', cors(),cursosCtrl.getCursos)
app.delete('/api/user/:_id1/curso/:_id2/delete',cors(), cursosCtrl.deleteCurso)
app.get('/api/user/:_id1/curso/:_id2', cors(),cursosCtrl.getCurso)
app.get('/api/students/get', cors(),StudentCtrl.getStudentsGral)
app.post('/api/user/:_id1/curso/students/:_id2', cors(),StudentCtrl.createStudent)
app.get('/api/user/curso/:_id/students', cors(),StudentCtrl.getStudents) 
app.get('/api/user/curso/student/:_id', cors(),StudentCtrl.getStudent)
app.put('/api/student/:_id', cors() , StudentCtrl.updateStudent)
app.delete('/api/user/student/:_id1/curso/:_id2/delete', cors(),StudentCtrl.deleteStudent)
app.post('/register', cors(), registerUser)
app.post('/login', cors(), loginUser)


module.exports = app;