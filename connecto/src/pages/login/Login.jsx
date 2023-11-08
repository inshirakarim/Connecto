import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login'>
    <div className='card'>
        <div className='left'>
            <h1>Hey there!</h1>
             <p>Welcome to Connecto - a safe place for all your connections.</p>
             <span>Don't have an account?  <a href="/register">Register here</a></span>
   
        </div>
        <div className='right'>
        <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login