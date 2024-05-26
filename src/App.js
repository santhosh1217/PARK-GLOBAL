import logo from './logo.svg';
import './App.css';
import Global from './Global'
import BCR from './BCR'
import './global.css'
import Programme  from './programme';
import Placement from './Placement';

function App() {
  return (
    <div className="App">
      <Global></Global>
      <BCR></BCR>
      <Programme></Programme>
      <Placement></Placement>
    </div>
  );
}

export default App;
