import './Access.scss'
import { useState } from 'react'

const Access = () => {
  
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const formHandler = (event) => {
    event.preventDefault()

    const validRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (validRegex.test(email)) {
        alert("Thanks for signing up!")
        setEmail("")
    } else {
        setError(true)
        setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className='access'>
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form className='access-form' onSubmit={formHandler}>
            <div className='email-container'>
                <input type='text' placeholder='email@example.com' onChange={(event)=>{setEmail(event.target.value)}} value={email || ''}/>
                {error ? <p className='error'>Please enter a valid email address</p> : null}
            </div>
            <input type='submit' value='Get Started For Free'/>
        </form>
    </div>
  )
}

export default Access