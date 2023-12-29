import './App.css';
import PersonCard from './componentes/PersonCard/PersonCard';

function App() {
  return (
    <div className='App'>
      <PersonCard firstName= "Doe" lastName=" Jane" age= {45} hairColor = "Hair Color: Black" />
      <PersonCard firstName= "Smith" lastName=" John" age= {23} hairColor = "Hair Color: Brown" />
      </div>
  );
}

export default App;
