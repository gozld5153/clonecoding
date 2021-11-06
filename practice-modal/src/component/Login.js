import React from 'react'

const Login = ({ handleMove, isLogin }) => {
   return (
      <div className="modalView" onClick={(e) => e.stopPropagation()}>
         <div className={`login ${isLogin ? "move" : ""}`}>
            <button onClick={handleMove}>login</button>
         </div>
         <div className="log_signup">
            <div className="container-signup"> 
            <input type="text" className=""></input>
            </div>
         </div>
      </div>
   )
}

export default Login
