import './App.css';
import LineChart from './components/LineChart';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <label>Stock ticket:</label>
      <input></input>
      <LineChart />
    </div>)
}
export default App;
