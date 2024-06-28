import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AppRouter from "./components/router";



class App extends React.Component {
  render() {
    return (
      <div>        
        <AppRouter/>
      </div>
    )
  }
}

export default App;