import {useRef, createRef} from 'react';
import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutMe from "./pages/AboutMe";

function App() {

  // const ref = useRef();
  const ref = createRef()
  console.log(ref.current);
  return (
    <div className="App">
      <Header ref={ref} />
      <div className="header_height"/>
      <Switch>
        <Route path="/" exact component={Home }/>
        <Route path="/contact" exact component={Contact }/>
        <Route path="/about" exact component={AboutMe }/>
      </Switch>
    </div>
  );
}

export default App;
