import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Leftbar from './components/Leftbar/Leftbar.jsx'
import Rightbar from './components/Rightbar/Rightbar.jsx'

function App() {

  const Layout = () => {
    return (
      <div className= 'layout'>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  return (
    
    <div className="App">
    <Router>
    <Routes>
    <Route path= {"/"} element={<Layout /> }>
    <Route path= {"/"} element={<Home />} />
    <Route path= {"profile/:id"} element={<Profile />} /> 
    </Route>
    <Route path={"/login"} element={<Login />} />
    <Route path={"/register"} element={<Register />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
