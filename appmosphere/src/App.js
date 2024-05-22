import { Routes, Route } from "react-router-dom";
import './App.css';
import Profilepage from './components/Profilepage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/profilepage' element={<Profilepage/>}/>
      </Routes>
    </div>
  );
}

export default App;

