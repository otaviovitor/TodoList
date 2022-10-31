import {ChangeEvent, FormEvent, useEffect, useState} from 'react';

//Interfaces

//Interfaces
import {ITask} from '../interface/Task'

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)


  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();

      const id = Math.floor(Math.random() * 1000)

      const newTask:ITask = {id, title, difficulty}

      setTaskList!([...taskList, newTask])

      setTitle("")
      setDifficulty(0)

      console.log(taskList);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };


  return (
    <form onSubmit={addTaskHandle}
     className='w-full flex flex-col gap-6'>

        <div className='flex flex-col text-zinc-100'>

            <label className='mb-3 font-semibold' htmlFor="title">Título:</label>

            <input 
            className='h-12 rounded bg-zinc-800 py-3 px-4 text-zinc-400'
            type="text"
            name='title'
            placeholder='Titulo da tarefa' 
            value={title}
            onChange={handleChange}/>
            

        </div>
        <div className='flex flex-col text-zinc-100'>
            <label className='mb-3 font-semibold' htmlFor="difficulty">Dificuldade:</label>

            <input 
            className='h-12 rounded bg-zinc-800 py-3 px-4 text-zinc-400 mb-8' 
            type="number" 
            name='difficulty' 
            placeholder='Dificuldade da tarefa'
            value={difficulty}
            onChange={handleChange} />
            

            <input className='h-12 rounded cursor-pointer bg-blue-700 py-3 px-4 text-zinc-50 font-semibold hover:bg-blue-600 transition' type="submit" value={btnText}/>

        </div>
    </form>
  )
}