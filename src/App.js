import React from 'react';
import './App.css';
import { Avatar, Quote, MapBox } from './components';
import { fetchIpAddress } from './actions/fetchIpAddress';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIpAddress());
  }, [dispatch]);

  return (
    <div className='App'>
      <header className='App-header'>Quote Bot</header>
      <div style={{ margin: '5px auto' }}>
        <Avatar />
        <Quote />
        <MapBox />
      </div>
    </div>
  );
}

export default App;
