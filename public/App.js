import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nebula Exchange</h1>
      </header>
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h2>NebulaX</h2>
        <p>Unlock the Value of Patents</p>
        <p>Contact us at <a href="mailto:info@nebulax.io">info@nebulax.io</a></p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
