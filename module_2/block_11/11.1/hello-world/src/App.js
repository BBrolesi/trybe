import logo from './logo.svg';
import './App.css';

const tasks = ['wake up', 'take a shower','have breakfast', 'work', 'have lunch', 'study', 'coffe break', 'study', 'have dinner', 'watch Netflix', 'Sleep'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (<ol>{tasks.map((currentTask) => task(currentTask))}</ol>);
}

export default App;
