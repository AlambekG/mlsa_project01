import './Login.css';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';

import remove from "../../images/loginImg/remove.png";
import user from "../../images/loginImg/user.png";
import lock from "../../images/loginImg/lock.png";


function Login() {
  const navigate = useNavigate();
  const popUp = useRef('null');
  const [visOne, setVisOne] = useState('');
  const [visTwo, setVisTwo] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const pwd = formData.get('password')

    console.log(username, pwd)
    if(pwd === "test1234!" && username === "test@luxpmsoft.com"){
      alert("success!")
      navigate('/HomePage');
    }
    else{
      popUp.current.showModal();
    }
  }
  const handleChange = (event, type) => {
    const match = event.target.value.match(/^[!@#$%^&*(),.?":{}|<>a-zA-Z0-9]+$/);
    if(!match){
      (type == 1)? setVisOne("notVis") : setVisTwo("notVis")
    }
    else{
      (type == 1)? setVisOne("") : setVisTwo("")
    }
  }

  return (
    <div className="App">

      <dialog ref={popUp} >
        <p>the provided password is wrong!</p>
        <button onClick={() => popUp.current.close()}>Close</button>
      </dialog>

      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <img src={remove} className='cart'/>
          <div className='input_field'>
            <img src={user} className='user' />
            <input type="text" name="username" placeholder='username' onChange={(e) => handleChange(e, 1)}/>
          </div>
          <p className={`alertMessage ${visOne}`}>Wrong combination!</p>

          <div className='input_field'>
            <img src={lock} className='lock' />
            <input type="password" name="password" placeholder='password' onChange={(e) => handleChange(e, 2)}/>
          </div>
          <p className={`alertMessage ${visTwo}`}>Wrong combination!</p>

          <button type="submit" class="loginBtn"> Login</button>
          <p className='forgotBtn' type="button">Forgot password?</p>

        </form>
      </div>
    </div>
  );
}

export default Login;
