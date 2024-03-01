import React from 'react'
import Nav from './components/Nav';
import Home from './pages/Home';
import { useState,useEffect } from 'react';


function App() {

        const [data,setData] = useState([])

        
async function fetchData(){
        try{
                const res = await fetch('http://127.0.0.1:8000/books/api/userapi/');
                const apiData = await res.json(); 
                setData(apiData);
                console.log(data);
                
                


        }catch(err){
                console.log(err)
        }

}


useEffect(()=>{
        fetchData();
},[])

  return (
    <div>
        
        <Nav />
      
        <Home/>
    </div>
     
    
  )
}

export default App;