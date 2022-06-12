
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import PostJob from "./components/PostJob"
function App() {
 
return(
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/postJob" element={<PostJob/>}/>
    </Routes>
  </Router>
  </div>)
}

export default App;
