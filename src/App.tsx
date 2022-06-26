import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/profile" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
