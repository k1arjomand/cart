import React from 'react'

export default function Login(probs) {
    const {login,persons}=probs
  return (
    <>
    <div className='login '>Login</div>
    <label>name: </label>
    <input type='text'
    value={login.name}
    
    ></input>
    <br></br>
    <label> Password :</label>
    <input type='password'></input>
    <br></br>
    <button className='btn'>Login</button>
    </>
  )
}
