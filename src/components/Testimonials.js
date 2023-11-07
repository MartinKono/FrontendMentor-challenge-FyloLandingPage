import './Testimonials.scss'
import SatishPhoto from '../images/profile-1.jpg'
import BrucePhoto from '../images/profile-2.jpg'
import IvaPhoto from '../images/profile-3.jpg'

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className='testimonials-container'>
            <div className='testimonial-icon'>
                <div className='testimonial'>
                    <p>Fylo has improved our team productivity by<br/>an order of magnitude. Since making the<br/>switch our team has become a well-oiled<br/>collaboration machine.</p>
                    <div className='profile'>
                        <img src={SatishPhoto}/>
                        <div className='profile-info'>
                            <h4>Satish Patel</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonial'>
                <p>Fylo has improved our team productivity by<br/>an order of magnitude. Since making the<br/>switch our team has become a well-oiled<br/>collaboration machine.</p>
                <div className='profile'>
                    <img src={BrucePhoto}/>
                    <div className='profile-info'>
                        <h4>Bruce McKenzie</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
            <div className='testimonial'>
                <p>Fylo has improved our team productivity by<br/>an order of magnitude. Since making the<br/>switch our team has become a well-oiled<br/>collaboration machine.</p>
                <div className='profile'>
                    <img src={IvaPhoto}/>
                    <div className='profile-info'>
                        <h4>Iva Boyd</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials