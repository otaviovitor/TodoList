
import '../src/style/index.css'


//Components
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export function App() {
 

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <Header />

      <h2>
        Contetudo...
      </h2>

      <Footer />
    </div>
  )
}


