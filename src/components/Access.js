import './Access.scss'
import { useState } from 'react'

const Access = () => {

  const [emailError, setEmailError] = useState(true)

  return (
    <div className='access'>
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support tem would be happy to help you.</p>
        <form className='access-form'>
            <div className='email-container'>
                <input type='text' placeholder='email@example.com'/>
                {emailError ? <p className='error'>Please enter a valid email address</p> : null}
            </div>
            <input type='submit' value='Get Started For Free'/>
        </form>
    </div>
  )
}

export default Access