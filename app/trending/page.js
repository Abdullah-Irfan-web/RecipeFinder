
"use client"
import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Recipes from '../components/Recipes'

const page = () => {
    const [recipes,setRecipes]=useState([]);
        useEffect(()=>{
            async function fetchdata(){
                const data=await fetch("https://api.spoonacular.com/recipes/random?apiKey=87142a54925f4c9284b7e58ea950512b&number=9");
                const response=await data.json();
                setRecipes(response.recipes);

            }
            fetchdata();
        },[])

       
  return (
    <div>


        <Navbar/>
        <h1 className='text-center text-3xl text-red-600'>Trending Recipes</h1>
    <Recipes arr={recipes}/>


     
    </div>
  )
}

export default page
