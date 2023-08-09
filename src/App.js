import React from 'react';
import Button from './components/button';
import Tab from './components/tab';
import './tailwind.css';

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];

  return (
    <>
      <div style={{padding: 20}}>
        <Tab>
          <Tab.Panel>1. tab</Tab.Panel>
          <Tab.Panel>2. tab</Tab.Panel>
          <Tab.Panel>3. tab</Tab.Panel>
        </Tab>
      </div>

      <div style={{padding: 20}}>
        <Button text="Buton örneği" />
        <Button text="Buton örneği" variant="success" />
        <Button text="Buton örneği" variant="danger" />
        <Button text="Buton örneği" variant="warning" />
      </div>
      <h1 tabIndex={3} style={{color: 'red', backgroundColor: 'yellow'}}>
        prototurk
      </h1>
      <label htmlFor="search" tabIndex={2} onClick={() => alert('merhaba')}>
        arama
      </label>
      <input type="text" id="search" tabIndex={1} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
