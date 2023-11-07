import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App