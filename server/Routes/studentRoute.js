const express = require('express')
const router = express.Router()
const studentCntrl = require("../Controllers/studentController")


router.get("/getall", studentCntrl.getallstudents)
router.post("/create", studentCntrl.createstudent)
router.get("/:name", studentCntrl.getonestudent)
router.delete("/delete/:id", studentCntrl.deletestudent)
router.delete("/deleteall", studentCntrl.deleteallstudent)

router.put("/update/:id",studentCntrl.updatestudent)
module.exports = router;