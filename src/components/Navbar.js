import './Navbar.scss'
import Logo from '../images/svgs/Logo'

const Navbar = () => {
  return (
    <nav>
        <Logo/>
        <ul>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Teams</a></li>
            <li><a href='#'>Sign in</a></li>
        </ul>
    </nav>
  )
}

export default Navbar