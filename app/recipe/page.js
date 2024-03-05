"use client"
import React, { useEffect ,useState} from 'react'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation'
import Recipes from '../components/Recipes'

const page = () => {
    const [recipes,setRecipes]=useState([]);
   // const [loading,setLoading]=useState(true);

    const searchParams=useSearchParams();
    const query=searchParams.get("query");
    useEffect(()=>{
        async function fetchdata(){
           const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=87142a54925f4c9284b7e58ea950512b&query=${query}`)
           const response =await data.json();
           setRecipes(response.results);
          // setLoading(false);

           
        }
        fetchdata()
    },[])
  return (
    <div>
    <Navbar/>
    <h1 className='text-center text-3xl text-red-600'>{query}</h1>
            <Recipes arr={recipes}/>
        
    </div>
  )
}

export default page
