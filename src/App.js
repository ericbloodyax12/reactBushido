import React, { Compopnent } from 'react';
import './App.css';

const App = ()=> {
  return (
      <div> first div
          Simple HTML
          <Header />
          <Technologies />




      </div>
  );
}
const Header = ()=> {
  return (
      <div>
        <a href="#$"> Home </a>
        <a href="#$"> New feed </a>
        <a href="#$"> Messages </a>
      </div>
  );
}
const Technologies = () => {
    return(
        <div>
        <ul>
            <li> jsx </li>
            <li> css </li>
            <li> html </li>
            <li> react </li>
        </ul>
        </div>
    )

}

export default App;
