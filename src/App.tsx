import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Profile from "./Profile/Profile";
import HomeTable from "./Home/Table/HomeTable";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route index element={<HomeTable/>}/>
                <Route path={"profile/:id"} element={<Profile/>}/>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
