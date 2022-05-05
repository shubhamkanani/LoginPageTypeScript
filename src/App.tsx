import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <Layout>
        <LoginForm />
      </Layout>
    </div>
  );
}

export default App;
