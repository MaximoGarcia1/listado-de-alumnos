const express = require('express');
const {connectDB} = require ('./database')
connectDB()
const app = express();
const cors = require('cors')
const controllers = require('./controllers');
const verifyToken = require('../middlewares/verifyToken');
const cursosCtrl = require ('./controllers/cursos.controller')
const StudentCtrl = require('./controllers/student.controller')


// settings
app.use(cors())
app.use(express.json()) 

app.set('port', process.env.PORT || 4000) 
app.get('/', (req,res)=>res.send('h'))


app.use('', require('./routes/users'))

app.get('/api/user', verifyToken, controllers.getUserByID)
 

app.post('/api/user/cursos/:_id', cursosCtrl.createCursos)
app.get('/api/user/:_id/cursos', cursosCtrl.getCursos)
app.delete('/api/user/:_id1/curso/:_id2/delete', cursosCtrl.deleteCurso)
app.get('/api/user/:_id1/curso/:_id2', cursosCtrl.getCurso)

app.get('/api/students/get', StudentCtrl.getStudentsGral)
app.post('/api/user/:_id1/curso/students/:_id2', StudentCtrl.createStudent)
app.get('/api/user/curso/:_id/students', StudentCtrl.getStudents) 
app.get('/api/user/curso/student/:_id', StudentCtrl.getStudent)
app.put('/api/student/:_id',StudentCtrl.updateStudent)
app.delete('/api/user/student/:_id1/curso/:_id2/delete', StudentCtrl.deleteStudent)

module.exports = app;