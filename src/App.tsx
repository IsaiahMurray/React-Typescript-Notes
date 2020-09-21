import React from "react";
import FetchChange from './components/Fetch-useEffect/DataFetching-Dynamic';
import FetchClick from './components/Fetch-useEffect/DataFetching-Click';
import FetchOne from './components/Fetch-useReducer/FetchOne';
import FetchTwo from './components/Fetch-useReducer/FetchTwo';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';

function App(){
  return(
    <div>
      <FetchOne />
      <hr/>
      <FetchTwo />
      <hr/>
      <FetchClick/>
      <hr/>
      <FetchChange />
      <hr/>
      <CounterOne />
      <hr/>
      <CounterTwo />
      <hr/>
      <CounterThree />
    </div>
  )
}

export default App;
