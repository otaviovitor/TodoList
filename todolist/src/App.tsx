
import '../src/style/index.css'


//Components
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

//Interfaces
import {ITask} from './interface/Task'

export function App() {
 

  return (
    <div className="bg-zinc-900 w-full h-screen items-center flex flex-col">
      <Header />
      <main className='h-3/4 w-96 flex flex-col'>
        <div className='flex items-center justify-center flex-col mt-8'>
          <h2 className='font-bold text-4xl text-zinc-100 mb-8 '>Adicione uma tarefa</h2>
          <TaskForm btnText='Criar tarefa' />
        </div>
        <div className='flex items-center justify-center flex-col mt-8'>
        <h2 className='font-bold text-2xl text-zinc-100 mb-8 '>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>

      <Footer />
    </div>
  )
}


