import logo from './logo.svg';
import './App.css';
import Welcome from './js/Welcome.js'
import newSession from './js/newSession.js'

function App() {
  return (
    <div className="App">
      <p> Hello </p>
      <Welcome name="Nick"/>
      <newSession/>
    </div>
  );
}

export default App;
