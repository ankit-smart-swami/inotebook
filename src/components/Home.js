import React, {useEffect} from 'react';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('auth-token') || '';
  useEffect(() => {
      if(authToken === '') 
        navigate('/login');
    // eslint-disable-next-line
  },[])
  
  return (
    <div className='container'>
      <Notes />
    </div>
  )
}

export default Home;
