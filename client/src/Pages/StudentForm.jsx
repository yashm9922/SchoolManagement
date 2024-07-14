import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
    const [formData, setFormData] = useState([])

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [contact, setContact] = useState('')
    const [feesPaid, setFeespaid] = useState('')
    const [classname, setClassname] = useState('')
    //may be cant use class and setClass usestate names here
    
    const navigate = useNavigate();

    const [updatingstudent, setUpdatingStudent] = useState(null)


    const handleSubmit = async (e) => {

        if (updatingstudent) {
            await axios.post(`http://localhost:3000/api/student/getbyid/${updatingstudent.id}`, {
                name, gender, dob, contact, feesPaid, classname
            })
        }
        
        else {
            e.preventDefault()
            try {
                await axios.post('http://localhost:3000/api/student/create', {
                    name, gender, dob, contact, feesPaid, classname
                })
                setName('');
                setGender('');
                setDob('');
                setContact('');
                setFeespaid('');
                setClassname('');
                navigate('/');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }

    return (
        <div className="container flex justify-center mx-auto py-8 text-left">
            <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold pt-5 mb-4">Student Information Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"
                        value={name}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                    <select
                        onChange={(e) => setGender(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender"
                        value={gender}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
                    <input
                        onChange={(e) => setDob(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date"
                        value={dob}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact Details</label>
                    <input
                        onChange={(e) => setContact(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact Details"
                        value={contact}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feesPaid">Fees Paid</label>
                    <input
                        onChange={(e) => setFeespaid(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feesPaid" type="number" placeholder="Fees Paid"
                        value={feesPaid}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">Class</label>
                    <input
                        onChange={(e) => setClassname(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" type="text" placeholder="Class"
                        value={classname}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm
