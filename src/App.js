import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Blocks from './components/Blocks'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Blocks/>
    </div>
  )
}

export default App