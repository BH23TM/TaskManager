import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import './App.css';
import Splash from './pages/Splash';
import Layout from './pages/Layout';
import Tasks from './pages/Tasks';

function App() {
  const auth = true;
  if (!auth) {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Layout/>}>
            <Route index element = {<Splash/>}/>
            <Route path = "Dashboard" element = {<Login/>}/>
            <Route path = "Login" element = {<Login/>}/> 
            <Route path = "Tasks" element = {<Login/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Layout/>}>
            <Route index element = {<Splash/>}/>
            <Route path = "Dashboard" element = {<Dashboard/>}/>
            <Route path = "Login" element = {<Login/>}/> 
            <Route path = "Tasks" element = {<Tasks/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
  
}

export default App;
