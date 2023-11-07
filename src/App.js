import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Blocks from './components/Blocks'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Blocks/>
      <Productive/>
      <Testimonials/>
    </div>
  )
}

export default App