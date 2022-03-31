import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Swatch from './components/Swatch/Swatch';


function App() {
  return (
    <div className="App">
      <Device name="uphone" price="13000"></Device>
      <Swatch></Swatch>
    </div>
  );
}

export default App;
