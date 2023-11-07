import './Footer.scss'
import Logo from '../images/svgs/Logo'
import IconLocation from '../images/svgs/IconLocation'
import IconPhone from '../images/svgs/IconPhone'
import IconEmail from '../images/svgs/IconEmail'
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebook} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <Logo/>
            <div className='footer-container'>
                <div className='location'>
                    <IconLocation/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce consectetuer risus a nunc.</p>
                </div>
                <div className='contact'>
                    <div className='phone'>
                        <IconPhone/>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className='email'>
                        <IconEmail/>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <ul className='links-1'>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
                <ul className='links-2'>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Terms</a></li>
                    <li><a href='#'>Privacy</a></li>
                </ul>
                <div className='socials'>
                    <div className='circle'>
                        <a href='#'><BiLogoFacebook/></a>
                    </div>
                    <div className='circle'>
                        <a href='#'><BiLogoTwitter/></a>
                    </div>
                    <div className='circle'>
                        <a href='#'><BiLogoInstagram/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer