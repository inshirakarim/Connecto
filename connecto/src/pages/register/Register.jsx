import React from 'react'
import './register.css'

function Register() {
 
  return (
    <div className='login'>
    <div className='card'>
        <div className='left'>
            <h1>Welcome!</h1>
             <p>Welcome to Connecto - a safe place for all your connections.</p>
                
        </div>
        <div className='right'>
        <h1>Sigup</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                <button>Signup</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register