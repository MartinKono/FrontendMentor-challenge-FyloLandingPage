import './Intro.scss'
import illustration_intro from '../images/illustration-intro.png'

const Intro = () => {
  return (
    <section className="intro">
        <img src={illustration_intro}/>
        <h1>All your files in one secure location,<br/> accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location.<br/>Access them wherever you need, share and collaborate with<br/>friends family, and coworkers.</p>
        <button>Get Started</button>
    </section>
  )
}

export default Intro