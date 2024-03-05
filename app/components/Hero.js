"use client"
import React,{useState} from 'react'
import pic from '../components/breakfast.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Hero = () => {
  const [data,setData]=useState("");
const router=useRouter();
  const createQuery=(name,value)=>{
    const param=new URLSearchParams();
    param.set(name,value);
    return param.toString();
  }

  function fetchrecipe(){
    
     router.push("/recipe"+"?"+createQuery("query",data));
    
  }
  return (
    <section className="text-gray-600 -mt-[13px] bg-gray-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> What To Cook Today?
        <br className="hidden lg:inline-block"/>
            Search Here
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to RecipeFinder, your ultimate culinary companion! Our user-friendly platform simplifies the search for delectable recipes by offering a vast collection accessible through a single search. </p>
      <div className="flex justify-center">
      <input onChange={(e)=>setData(e.target.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      
        <button className="inline-flex text-white bg-indigo-500 border-0 mx-6  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={fetchrecipe}>Search</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
      <Image height={700} width={820} className="object-cover object-center rounded " alt="hero" src={pic}/>
    </div>
  </div>
</section>
  )
}

export default Hero
