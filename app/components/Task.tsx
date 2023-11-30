'use client';
import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Modal from './Modal';
import {  editTodo } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

interface TaskProps {
    task : ITask
}

const Task: React.FC<TaskProps>= ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id : task.id,
            text : taskToEdit,
        })
        // 서밋 후 인풋 벨류 초기화
        setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
    }
    return (
    
        <tr key={task.id}>
            <td className='w-full'>{task.text}</td>
            <td className='flex gap-5'>
                <FaRegEdit onClick={()=> setOpenModalEdit(true)} cursor='pointer' className='text-blue-500' size={20}/>
                <Modal 
                setModalOpen = {setOpenModalEdit} 
                modalOpen= {openModalEdit}> 
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edit Task</h3>
                        <div className='modal-action'>
                        <input 
                        value={taskToEdit} 
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full "
                        onChange={e => setTaskToEdit(e.target.value)} />
                        <button type='submit' className='btn'>submit</button>
                        </div>
                    </form>
                </Modal >
                <FiTrash2 cursor='pointer'  className='text-red-500'  size={20}/>
            </td>
        </tr>
    
)
}

export default Task