import logo from './logo.svg';
import './App.css';


function Header(){
  return(
    <header>
        <h3>There h3</h3>
        <span>There span</span>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <div>
        There div
      </div>
    </div>
  );
}

export default App;
