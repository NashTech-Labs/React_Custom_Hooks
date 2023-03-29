import logo from './logo.svg';
import './App.css';
import { ForwardCounter } from './components/ForwardCounterComponent';
import { BackwardCounter } from './components/BackwardCounter';
import useHttpRequest from './hooks/use-http-request';
import { useEffect, useState } from 'react';

function App() {

  const [ data , setData] = useState();

  const handleData =(response)=>{
    //Do whatever you want with response
    console.log(response);
    setData(response)
  }

  useEffect(()=>{
    getUserData()
  },[])
  
  

  const { isLoading , error , sendRequest:getUserData} = useHttpRequest( { url: './json/mock'}, handleData)



  return (
    <div className="App">
     <ForwardCounter></ForwardCounter>
     <BackwardCounter></BackwardCounter>
    </div>
  );
}

export default App;
