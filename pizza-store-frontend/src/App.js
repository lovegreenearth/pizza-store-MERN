import './App.scss';
import { useEffect } from 'react';
import Routing from './routes';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'
import axios from 'axios'

axios.defaults.baseURL="http://localhost:5000"

function App() {
 
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
