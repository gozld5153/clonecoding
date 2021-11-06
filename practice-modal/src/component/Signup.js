import React from 'react'

const Signup = ({ handleMove, isLogin }) => {
   return (
      <div className="modalView" onClick={(e) => e.stopPropagation()}>
         <div className="log_signup">
            <div className="container-signup"> 
               <input type="text" className=""></input>
            </div>
         </div>
         <div className={`login ${isLogin ? "" : "move1"}`}>
            <button onClick={handleMove}>signup</button>
         </div>
    </div>
   )
}

export default Signup
