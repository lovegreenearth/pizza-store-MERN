import './App.scss';
import { useEffect } from 'react';
import Routing from './routes';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'

function App() {
  useEffect(() => {
    localStorage.setItem('apiURL', 'http://localhost:5000')
  }, []);
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>  
  );
}

export default App;
