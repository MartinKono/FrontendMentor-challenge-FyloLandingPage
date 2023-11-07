import './Blocks.scss'
import IconAccess from '../images/svgs/IconAccess'
import IconSecurity from '../images/svgs/IconSecurity'
import IconCollab from '../images/svgs/IconCollab'
import IconFile from '../images/svgs/IconFile'

const Blocks = () => {
  return (
    <section className='blocks'>
        <div className='blocks-container'>
            <div className='block'>
                <IconAccess/>
                <h2>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer<br/>to access your account means your files follow you<br/>everywhere.</p>
            </div>
            <div className='block'>
                <IconSecurity/>
                <h2>Security you can trust</h2>
                <p>2-factor authentification and user-controlled encryption are<br/>just a couple of the security features we allow to help<br/>secure your files.</p>
            </div>
            <div className='block'>
                <IconCollab/>
                <h2>Real-time collaboration</h2>
                <p>Securely share files and folders with friends, family and<br/>collegues for live collaboration. No email attachments<br/>required.</p>
            </div>
            <div className='block'>
                <IconFile/>
                <h2>Store any type of file</h2>
                <p>Whether you're sharing holidays photos or work<br/>documents, Fylo has you covered allowing for all file<br/>types to be securely stored and shared.</p>
            </div>
        </div>
    </section>
  )
}

export default Blocks