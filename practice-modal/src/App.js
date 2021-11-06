import './App.css';
import { useState } from 'react'
import Login from './component/Login'
import Signup from './component/Signup'

function App() {
  const [isModal, setIsModal] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const handleModal = () => {
    setIsModal(!isModal)
  }
  const handleMove = () => {
    setIsLogin(!isLogin)
    setTimeout(test, 1000)
  }

  function test(){
    setIsChange(!isChange)
  }

  return (
    <div className="App">
      <button onClick={handleModal}>modal button</button>
      {isModal ? 
        <div className="modalBack" onClick={handleModal}>
          <div className="container">
            <button className="close">X</button>
            {!isChange ?
             <Login handleMove={handleMove} isLogin={isLogin}/>
            : <Signup handleMove={handleMove} isLogin={isLogin}/>}  
          </div>
        </div>
        : null}
    </div>
  );
}

export default App;
