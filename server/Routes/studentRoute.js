const express = require('express')
const router = express.Router()
const studentCntrl = require("../Controllers/studentController")

router.get("/getall", studentCntrl.getallstudents) //getting all the students
router.get("/getbyid/:id",studentCntrl.getonestudentbyid) // getting student by id
router.get("/get", studentCntrl.getonestudent) // getting student by name
router.post("/create", studentCntrl.createstudent) // adding/creating student 
router.delete("/delete/:id", studentCntrl.deletestudent) // delete student by id
router.delete("/deleteall", studentCntrl.deleteallstudent) // delete all studnet
router.put("/update/:id",studentCntrl.updatestudent) // update student id

module.exports = router;