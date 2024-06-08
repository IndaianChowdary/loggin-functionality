import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/editprofile" element={<EditProfile></EditProfile>}></Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
