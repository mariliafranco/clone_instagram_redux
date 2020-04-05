import React from "react";
import Home from "./pages/home";
import store from "./components/Reducer"
import { Provider } from "react-redux";
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

