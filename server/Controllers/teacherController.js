const Teacher = require("../models/teacher.model")

                          
//api to create teacher 
exports.createTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body)
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//api to get all teachers
exports.getallteachers = async (req, res) => {
    try {
        const all_teachers = await Teacher.find()
        res.send(all_teachers)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}



//api to get one teacher by name
exports.getoneteacher = async (req, res) => {
    const name = req.params.name;
    try {
        const teacher = await Teacher.findOne({ name })
        if (!teacher) return res.status(404).send("User not found")
        res.send(teacher)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


// api to delete teacher by id
exports.deleteteacher = async (req, res) => {
    try {
        const { id } = req.params //always use this syntax for delete by id mdoe
        const deleteteacher = await Teacher.findByIdAndDelete(id)
        if (!deleteteacher) return res.status(404).send("User Not Found")
        res.json({ message: 'teacher deleted successfully', deleteteacher });
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


// api to delete all teacher 
exports.deleteallteacher = async (req, res) => {
    try {
        const deleteallteacher = await Teacher.deleteMany({})
        res.json({ message: 'All teachers deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//api to update teacher by id
exports.updateteacher = async (req, res) => {
    const { id } = req.params //always use this syntax for delete by id mdoe
    const newData = req.body
    try {
        const updateteacher = await Teacher.findByIdAndUpdate(id, newData, { new: true })
        if (!updateteacher) return res.status(404).send("User Not Found")
        res.json({ message: 'teacher updates successfully', updateteacher });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}