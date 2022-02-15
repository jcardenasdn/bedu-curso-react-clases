import logo from './logo.svg';
import './App.css';
import Middle from './Components/Middle';
import Rectangle from './Components/Rectangle';

function App() {
  return (
    <div className="container">
      <Rectangle />
      <Middle />
      <Rectangle />
    </div>
  );
}

export default App;
