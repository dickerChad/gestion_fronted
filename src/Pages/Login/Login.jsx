import React, { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import './Login.scss'

function Login() {
    let {loginUser,user} = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const LoginBtn = () => {

    }
  return (
    <div className="login">
      <form onSubmit={loginUser}>
        <div className='box'>
          <div className="form">
            <h2>Se connecter</h2>
            <div className="inputBox">
              <input type="email" name="email" id="em"  required = "required"/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" name="password" required = "required"/>
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#"> Mot de passe oublié</a>
            </div>
           <input type="submit" value="Login" />
        </div>    
      </div>
  </form> 
</div>
  )
}

export default Login