import './Productive.scss'
import illustration_productive from '../images/illustration-stay-productive.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Productive = () => {
  return (
    <section className='productive'>
        <img src={illustration_productive}/>
        <div className='productive-info'>
            <h1>Stay productive,<br/>wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you<br/>covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and collegues for live<br/>collaboration. No email attachments required.</p>
            <p id='link'><a href='#'>See how Fylo works<BsFillArrowRightCircleFill/></a></p>
        </div>
    </section>
  )
}

export default Productive