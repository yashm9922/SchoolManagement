const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

const studnetRouters = require('./Routes/studentRoute')
const teacherRouters = require('./Routes/teacherRoute')

const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
// SchoolMgnt will be database name
mongoose.connect("mongodb://localhost:27017/SchoolMgnt")
    .then(() => {
        console.log("MongoDB Database Connected")
    })
    .catch((err) => {
        console.log("error connecting mongoDB -> ", err.message);
    })


app.use('/api/student', studnetRouters)
app.use('/api/teacher', teacherRouters)

app.listen(3000, () => {
    console.log("server started at port 3000")
})

