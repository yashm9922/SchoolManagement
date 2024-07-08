import { React, useState, useEffect } from 'react'
import axios from 'axios'

const StudentTable = () => {

    const [input, setinput] = useState([])
    const [deletedID, setDeletedID] = useState(null)
    const instance = axios.create({ baseURL: 'http://localhost:3000/api/student/' });

    
    useEffect(() => {
        const fecthdata = async () => {
            try {
                const response = await instance.get('getall')
                setinput(response.data);
            }
            catch (error) {
                console.log("Error Fetching Dta", error)
            }
        };
        fecthdata();
    }, [deletedID])
    //here deleted id is passed to re-fetch with deleted id 


    const handleDelete = async (id) => {
        try {
            await instance.delete(`delete/${id}`)
            setDeletedID(id)
        } catch (error) {
            console.log("Error Deleting Data", error)
        }
    }

    

    return (
        <div className="flex justify-center pt-10">
            <table className="text-sm border rounded-sm">
                <thead className="text-xs border text-gray-700 uppercase  dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Sr.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            D.O.B
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fees_paid
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Class
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        input.map((data, index) => (
                            <tr className=" dark:border-gray-700" key={data._id}>
                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.name}
                                </th>
                                <td className="px-6 py-4">
                                    {data.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {data.DOB}
                                </td>
                                <td className="px-6 py-4">
                                    {data.contact}
                                </td>
                                <td className="px-6 py-4">
                                    {data.fees_paid}
                                </td>
                                <td className="px-6 py-4">
                                    {data.class}
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" onClick={() => handleDelete(data._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>

            </table>
        </div>

    )
}

export default StudentTable