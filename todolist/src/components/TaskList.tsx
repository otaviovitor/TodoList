import React from 'react'
import { BsFillPenFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

//Interfaces
import { ITask } from '../interface/Task'

type Props = {
  taskList: ITask[];
  
}

export const TaskList = ({taskList}:Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className='w-full transition bg-zinc-800 flex rounded-lg p-3 mb-5 hover:bg-blue-700'>

            <div className='p-2 w-full flex flex-col justify-between' >

              <h4 className='font-semibold text-zinc-50 text-base mb-4'>{task.title}</h4>

              <p className='font-semibold  text-zinc-50'>Dificuldade: <span className='text-yellow-400'>{task.difficulty}</span></p>

            </div>

            <div className='flex flex-col justify-evenly w-14 p-2 '>

              <i className='transition bg-[#ffffff21] text-white rounded flex items-center justify-center w-8 h-8 mb-3 cursor-pointer hover:text-green-700 hover:bg-green-300 '>
               <BsFillPenFill /> 
              </i>

              <i className='transition bg-[#ffffff21] text-white rounded flex items-center justify-center p-1 w-8 h-8
              hover:text-red-700 hover:bg-red-300 cursor-pointer'> <FaTrash /> 
              </i>

            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas!</p>
      )}

    </>
  )
}