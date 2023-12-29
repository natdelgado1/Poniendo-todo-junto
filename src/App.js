import './App.css';
import PersonCard from './componentes/PersonCard/PersonCard';

function App() {
  return (
    <div className='App'>
      <PersonCard firstName= "Doe," lastName=" Jane" age="Age: 45" hairColor = "Hair Color: Black" />
      <PersonCard firstName= "Smith," lastName=" John" age="Age: 88" hairColor = "Hair Color: Brown" />
      <PersonCard firstName= "Fillmore," lastName=" Millard" age="Age: 50" hairColor = "Hair Color: Brown" />
      <PersonCard firstName= "Smith," lastName=" Maria" age="Age: 62" hairColor = "Hair Color: Brown" />

          </div>
  );
}

export default App;
