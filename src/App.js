import React, { useState } from 'react';
import { Button } from 'antd'
import './App.css';

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className="App">

      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  );
}

export default App;
