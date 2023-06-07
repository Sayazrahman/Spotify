import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';




function App() {
  return (
   <>
    <div className="App" style={{position: 'sticky',overflow: 'overlay'}}>
      <Main/>
    </div>
   <div className="app">
   
   
   </div>
   <div className="sidebar"style={{width: '10%'}}>
    <Router>
     {/* <Sidebar/> */}
    </Router>
   </div>
   
    
   


   </>
  );
}

export default App;
