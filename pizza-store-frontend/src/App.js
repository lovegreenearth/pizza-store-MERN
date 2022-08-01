import './App.scss';
import Routing from './routes';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'

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
