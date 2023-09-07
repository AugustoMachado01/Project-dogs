import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/login";
import { UserStorage } from "./UserContext";
import { User } from "./components/User";
import { ProtectedRouter } from "./components/Helper/ProtectedRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRouter>
                  <User />
                  <Outlet />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
