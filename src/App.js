import axios from 'axios';
import React, { useEffect } from 'react';
import Header from './Components/Header';
import ToDo from './Components/ToDo';

function App() {

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      console.log(data.items[0].item);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
