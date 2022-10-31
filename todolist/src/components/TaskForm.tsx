import {ChangeEvent, FormEvent, useEffect, useState} from 'react';

//Interfaces

//Interfaces
import {ITask} from '../interface/Task'

interface Props {
    btnText: string
}

export const TaskForm = ({btnText}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)


  const addTaskHandle = () => {
      console.log("olaaaaaaaa");
      
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    if(e.target.value === "title"){

      setTitle(e.target.value)

    }else{

      setDifficulty(parseInt(e.target.value))
      
    }

    console.log(title);
    console.log(difficulty);
    
  }








  return (
    <form onSubmit={addTaskHandle}
     className='w-full flex flex-col gap-6'>

        <div className='flex flex-col text-zinc-100'>

            <label className='mb-3 font-semibold' htmlFor="title">Título:</label>

            <input onChange={handleChange}
             className='h-12 rounded bg-zinc-800 py-3 px-4 text-zinc-400' type="text" name='title' placeholder='Titulo da tarefa' />

        </div>
        <div className='flex flex-col text-zinc-100'>
            <label className='mb-3 font-semibold' htmlFor="difficulty">Dificuldade:</label>

            <input onChange={handleChange}
             className='h-12 rounded bg-zinc-800 py-3 px-4 text-zinc-400 mb-8' type="text" name='difficulty' placeholder='Dificuldade da tarefa' />

            <input className='h-12 rounded cursor-pointer bg-blue-700 py-3 px-4 text-zinc-50 font-semibold hover:bg-blue-600 transition' type="submit" value={btnText}/>

        </div>
    </form>
  )
}