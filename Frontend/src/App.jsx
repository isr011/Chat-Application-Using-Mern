import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logout from './home/left1/Logout'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Loading from './components/Loading'

function App() {
  const[authUser,setAuthUser] = useAuth();

  console.log(authUser);
  return (
   
    <>
    {/* <Loading></Loading> */}

<Routes>
  <Route path="/" element={
    authUser ?  (<div className='flex h-screen'>
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
     
      </div>
      ) : (
        <Navigate to = { "/login"}/>
      )
  } 
  />
  <Route path="/login"
    element={authUser ? <Navigate to="/" /> : <Login />}
   />
  <Route path="/signup" 
    element={authUser ? <Navigate to="/" /> : <Signup />}
  />
  

</Routes>





      {/* <div className='flex h-screen'>
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
     
      </div> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      
    </>
  )
}

export default App


