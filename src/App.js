/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './components/navbar/Navbar';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import PortfolioDashboard from './pages/portfolio-dashboard';
import StockResearch from './pages/stock-research';
import FileImport from './pages/import-file'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stock-research' component={StockResearch} />
          <Route path='/portfolio-dashboard' exact component={PortfolioDashboard} />
          <Route path='/import-file' component={FileImport} />
        </Switch>
      </Router>
      <Home/>
    </>
  )
}
export default App;