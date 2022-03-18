// import logo from './logo.svg';
import './App.css';

import { Routes,Route } from 'react-router-dom';



import Accueil from './components/Accueil';
import Description from './components/Description';




function App() {
 
  return (
    <div className="App">

       <Accueil/>
   
      
       <Routes>
       <Route path='/' element={<Accueil/>}/> 
       <Route path='/description' element={<Description/>}/>
  
      
      </Routes>
     

    </div>
  );
}

export default App;
