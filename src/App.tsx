import React from 'react';
import './App.css';
import Table from "./Home/Table/Table";
import {BrowserRouter, Route, Routes} from "react-router";
import Profile from "./Profile/Profile";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route index element={<Table/>}/>
                <Route path={"profile/:id"} element={<Profile/>}/>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
