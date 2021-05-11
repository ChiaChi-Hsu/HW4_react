import './App.css';
import userprofile from './userprofile'

function App(){
  return(
    <div className="App">
      <div>
        {userprofile()}
      </div>
    </div>
  );
}

export default App;