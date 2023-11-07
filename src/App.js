import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Blocks from './components/Blocks'
import Productive from './components/Productive'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Blocks/>
      <Productive/>
    </div>
  )
}

export default App