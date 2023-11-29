"use client"
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
    <div>
        <button onClick={()=> setModalOpen(true)} 
        className='btn btn-primary w-full'>Add New Task
        <FaPlus size={15} className="ml-2" />
        </button>

        <Modal 
        setModalOpen = {setModalOpen} 
        modalOpen= {modalOpen}/>
    </div>
)
}

export default AddTask