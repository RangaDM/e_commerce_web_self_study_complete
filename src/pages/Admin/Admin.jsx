import React from 'react'
import MainContainer from '../../Layout/MainContainer'
import logOut from '../../Utils/Auth/logOut';

const Admin = () => {

  return (
    <MainContainer>
        <h1>welcome</h1>
        <br/>
        <button onClick={logOut}>LogOut</button>
    </MainContainer>
  )
}

export default Admin