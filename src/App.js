import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import Home from "./components/DashBoardPage/Home";
import Tasks from "./components/DashBoardPage/Tasks";
import Messages from "./components/DashBoardPage/Messages";
import DailyStatusUpdate from "./components/DashBoardPage/DailyStatusUpdate";
import ApplyLeave from "./components/DashBoardPage/ApplyLeave";
import { CreateReq } from "./components/DashBoardPage/CreateReq";
import { N } from "./components/N";
import { DashBoard } from "./components/DashBoardPage/TopNavigation/DashBoard";

//import { DashBoard } from "./components/DashBoardPage/TopNavigation/DashBoard";

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signUp" element={<SignUpPage />} />
          <Route exact path="/dashBoard" element={<DashBoard/>}/>
          <Route exact path="/h" element={<N/>}/>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/createRequest" element={<CreateReq/>} />
          <Route exact path="/applyLeave" element={<ApplyLeave/>} />
          <Route
            exact
            path="/dailyStatusUpdate"
            element={<DailyStatusUpdate />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
