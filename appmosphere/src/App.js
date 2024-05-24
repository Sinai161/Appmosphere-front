import { Routes, Route } from "react-router-dom";
import './App.css';
import Profilepage from './components/Profilepage'
import CreateProfilePage from "./components/CreateProfilePageForm";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/profilepage" element={<Profilepage/>}/>
        <Route path="/createprofilepage" element={<CreateProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

