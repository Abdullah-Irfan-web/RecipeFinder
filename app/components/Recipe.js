"use client"
import React , {useState,useEffect} from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const Recipe = () => {
    const[steps,setSteps]=useState([]);
    const[ingredients,setIngredients]=useState([{}]);
    const [total,setTotal]=useState(0);
    const [percost,setPercost]=useState(0);
    const[time,setTime]=useState(0);
    const search=useSearchParams();
    const queries=JSON.parse(search.get("query"));
    const id=queries.id
    const title=queries.title;
    const image=queries.image
    
   

    useEffect(()=>{
        async function fetchdata(){
            const data=await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=87142a54925f4c9284b7e58ea950512b`)
            const response=await data.json();
           
         
           
            const response2=await fetch(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=87142a54925f4c9284b7e58ea950512b`)
             const ingre=await response2.json();
            setSteps(response[0].steps);
           console.log(ingre.ingredients);
             setIngredients(ingre.ingredients)
             setTotal(ingre.totalCost);
             setPercost(ingre.totalCostPerServing)
             
            response[0].steps.forEach((s)=>{
                if(s.length){
                    console.log(s.length.number)
                   setTime((prev)=>prev+s.length.number);
                }
            })
        }
        fetchdata()
    },[])
  return (
    <div>
      <div className='flex flex-row justify-between m-4'>
                <div>
                    <p className='text-4xl  text-gray-600 ml-5'>{title}</p>
                    <div className='border-l-4 border-red-600 m-11 px-5 py-4 font-bold text-lg'>
                        <ul>
                            <li className='text-gray-800'>Prep: {Math.floor(time/2)}min</li>
                            <li className='text-gray-800'>Cost: ₹ {total}</li>
                            <li className='text-gray-800'>Yield: {Math.floor(total/percost)} Servings</li>
                        </ul>
                    </div>
                </div>
                <div className='mr-10 mb-6'>
               <Image height={350} width={400} className='rounded-2xl shadow-2xl hover:scale-110 duration-100' src={image} alt={title}/>
               </div> 
            </div>
            <div className='grid gap-7 grid-cols-3'>
                <div className='col-span-2 px-16'>
                <h1 className='text-3xl -ml-3 font-mono text-red-600'>Recipe Steps</h1>
                    <div className='ml-3 py-6 text-md space-y-5 text-slate-600 '>
                        {steps.map((cookstep,index)=>{

                            return ( <div> <span className='text-2xl text-red-600'>{index+1} </span> 
                             {cookstep.step}
                             </div>
                            )
                        })}
                       
                       
                  
                    </div>
                </div>
                <div className=''>
                <h1 className='text-3xl -ml-3 font-mono text-red-600'>Ingredients</h1>
                    <ul className='list-disc space-y-11 mt-16 mb-6 ml-6 text-xl'>
                        {ingredients.map((ing)=>{
                             return(

                              <li className='-mt-10 '> {ing.name}  {ing.amount?Math.ceil(ing.amount.metric.value):""} { ing.amount? ing.amount.metric.unit? `( ${ing.amount.metric.unit})`:"" :""} </li>
                             )
                        })}
                      
                       
                        
                    </ul>
                </div>

            </div>
    </div>
  )
}

export default Recipe
