import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  //for conditional rendering, waiting for the appwrite BaaS to finish loading
  const [loading, setLoading] = useState(true);

  //to get the current user
  const dispatch = useDispatch();

  //as soon as the app is mounted, check if the user is logged in
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(loading);

  //conditional rendering based on loading
  return loading ? (
    <div className="min-h-screen">Loading</div>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Content
          {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
