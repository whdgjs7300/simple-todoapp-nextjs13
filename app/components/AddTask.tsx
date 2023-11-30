"use client"
import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            id : uuidv4(),
            text : newTaskValue,
        })
        // 서밋 후 인풋 벨류 초기화
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }

    return (
    <div>
        <button onClick={()=> setModalOpen(true)} 
        className='btn btn-primary w-full'>Add New Task
        <FaPlus size={15} className="ml-2" />
        </button>

        <Modal 
        setModalOpen = {setModalOpen} 
        modalOpen= {modalOpen}> 
            <form onSubmit={handleSubmitNewTodo}>
                <h3 className='font-bold text-lg'>Add new Task</h3>
                <div className='modal-action'>
                <input 
                value={newTaskValue} 
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-full w-full"
                onChange={e => setNewTaskValue(e.target.value)} />
                <button type='submit' className='btn'>submit</button>
                </div>
            </form>
        </Modal >
    </div>
)
}

export default AddTask