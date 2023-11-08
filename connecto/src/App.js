import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

function App() {
  return (
    
    <div className="App">
    <Router>
    <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
