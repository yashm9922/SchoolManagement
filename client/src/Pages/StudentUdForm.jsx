import React, { useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const StudentUdForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        contact: '',
        feesPaid: '',
        class: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })  
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('', {
                name: formData.name,
                gender: formData.gender,
                DOB: formData.dob,
                contact: formData.contact,
                fees_paid: formData.feesPaid,
                class: formData.class
            })
            console.log(response.data)
            setFormData({
                name: '',
                gender: '',
                dob: '',
                contact: '',
                feesPaid: '',
                class: ''
            })
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="container flex justify-center mx-auto py-8 text-left">
            <form className="w-full max-w-lg bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl text-gray-700 font-bold pt-5 mb-4">Student Update Information Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" value={formData.name} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                    <select onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" value={formData.gender}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" value={formData.dob} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact Details</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact Details" value={formData.contact} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feesPaid">Fees Paid</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feesPaid" type="number" placeholder="Fees Paid" value={formData.feesPaid} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">Class</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" type="text" placeholder="Class" value={formData.class} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentUdForm
