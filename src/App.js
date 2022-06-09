import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Profile from "./components/Profile";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
