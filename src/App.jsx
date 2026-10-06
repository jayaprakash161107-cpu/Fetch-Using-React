
import React, { useEffect,useState } from 'react'
import './App.css'
import Card from './component/Card'



export const App = () => {

const[user,setUser] =useState([])

useEffect(()=>{
  async function fech(){
    try {
        const rec = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rec.json();
    console.log(data);
    

    setUser(data)

    } catch (error) {
        console.log("error");
    }
        
    
}
fech();
},[])


  return (
   <>

   <h1>USERS</h1>
   <div className="container" id="contain">

   {
  user.map((user) => {
    return <Card user={user} key={user.id}/>
  })

}
</div>
   </>
  )
}
export default App