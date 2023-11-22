import React from 'react'
import MainContainer from '../../Layout/MainContainer'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Store/Slices/userSlices';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
    navigate("/admin");
  }

  return (
    <MainContainer>
        <h1>welcome</h1>
        <br/>
        <button onClick={logout}>LogOut</button>
    </MainContainer>
  )
}

export default Admin