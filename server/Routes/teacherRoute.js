const express = require('express')
const router = express.Router()
const teacherCntrl = require("../Controllers/teacherController")


router.get("/getall", teacherCntrl.getallteachers)
router.post("/create", teacherCntrl.createTeacher)
router.get("/:name", teacherCntrl.getoneteacher)
router.delete("/delete/:id", teacherCntrl.deleteteacher)
router.delete("/deleteall", teacherCntrl.deleteallteacher)
router.put("/update/:id", teacherCntrl.updateteacher)


module.exports = router;