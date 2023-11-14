import { useEffect } from 'react'
//import { useNavigate } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Navbar from './components/Navbar'
//import { TestPage } from './TestPage.tsx';
import axios from "axios";

function BlogPage() {
  useEffect(() => {
    //document.title = 'You have pressed ' + count + ' times!';
      const pokemon = async () =>{
        await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((result)=>console.log(result));
      }
      pokemon();
    
  }, []); 

  return (
    <>
      <h1>Blog Page</h1>
    </>
  )
}

export default BlogPage