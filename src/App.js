import logo from './logo.svg';
import './App.css';
import { ForwardCounter } from './components/ForwardCounterComponent';
import { BackwardCounter } from './components/BackwardCounter';

function App() {
  return (
    <div className="App">
     <ForwardCounter></ForwardCounter>
     <BackwardCounter></BackwardCounter>
    </div>
  );
}

export default App;
