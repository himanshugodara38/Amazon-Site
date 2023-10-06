import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

import { auth } from './firebase';
function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SignIn = e => {
        e.preventDefault();
       
        
    }
    const register = e => {
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email.password)
            .then((auth) => {
                console.log(auth);
            })
        .catch(error=> alert(error.message))
   }

  return (
      <div className='login'>
         <Link to ='/'>
       <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt=''></img>
          </Link>
          <div className='login_container'>
              <h1>Sign-in</h1>
              <form>
                  <h5>E-mail</h5>
                  <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
                  <h5>Password</h5>
                  <input type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button type='submit' className='signIn_button' onClick={SignIn}>Sign In</button>
              </form>
              <p>
                  By Signing In you agree to our conditions of use and sale. Please see our Privacy Policy or Notice and our Interest-Based Ads Notice.

              </p>
              <button onClick={register} className='createAcc_button'>Create your Account</button>
          </div>
      </div>
  )
}

export default Login
