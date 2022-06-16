import React from 'react';
import './App.css';
import Textarea from './components/Textarea/Textarea';
import List from './components/List/List';

const App: React.FC = () => {
  return (
    <div className='wrap'>
    <div className='nothing'></div>
      <div className='container'>
        <header className='header'>
          TODO лист:
        </header>
        <div className='textarea'>
          <Textarea />
        </div>
        <div className='list'>
          <List />
        </div>
      </div>
  </div>
  );
}

export default App;
