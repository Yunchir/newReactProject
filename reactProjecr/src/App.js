import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Maddle from './components/middle/Middle';
import Left from './components/Left'

function App() {
  let name = "legend gold"
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Left/>
      <Maddle/>
    </div>

  );
}

export default App;
