import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form';

const TeacherForm = () => {


    return (
        <div className="container flex justify-center mx-auto py-8 text-left">
            <Form Factor='Teacher' Money='Salary' Assigned_Class='Assigned Class' />
        </div>
    )
}

export default TeacherForm
