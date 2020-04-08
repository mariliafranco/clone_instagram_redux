import React from "react";
import store from "./components/Reducer"
import { Provider } from "react-redux";
import './App.css';
import Header from "./components/Header";
import Routes from "./Routes"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;

