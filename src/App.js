import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Other components and routes */}
      </div>
    </Router>
  );
}

export default App;
