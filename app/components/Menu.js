"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Pizza from './pizza.jpg'
import Burger from './burger.jpg'
import Sandwich from './sandwich.jpg'
import Pasta from './pasta.jpg'
import Fries from './fries.jpg'
import Rice from './friedrice.jpg'
import Steak from './steak.jpg'
import Chicken from './chicken.jpg'
import Snack from './snack.jpg'
import Salad from './salad.jpg'
import Shake from './shake.jpg'
import Dessert from './dessert.jpg'

const Menu = () => {
    const Router=useRouter();
    const createQuery=(name,value)=>{
        const param=new URLSearchParams();
        param.set(name,value);
        return param.toString();
      }
    let dish=[{name:"Pizza",img:Pizza} ,{name:"Burger",img:Burger}, {name:"Sandwich",img:Sandwich}, {name:"Pasta",img:Pasta}, {name:"Fries",img:Fries}, {name:"Fried Rice",img:Rice}, {name:"Steak",img:Steak},{name:"Chicken",img:Chicken}, {name:"Snack",img:Snack}, {name:"Salad",img:Salad}, {name:"Shake",img:Shake}, {name:"Dessert",img:Dessert}];
  return (
    <div>
    
     <section className="text-gray-600  body-font -mt-[50px]">
   
       
   <div className="container px-5 py-24 mx-auto">
   <div className="flex flex-wrap -m-4">
  
       {dish.map((dish)=>{
        return (
            <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 hover:scale-110 duration-100 rounded-lg overflow-hidden">
              <Image width={400} height={400} className="w-full h-[18rem]" src={dish.img} alt="blog"/>
              <div className="p-6">
                
                <h1 className="title-font text-lg font-medium text-red-600 mb-3">{dish.name}</h1>
            
                <div className="flex items-center flex-wrap ">
                  <button onClick={()=>{
                 console.log("hello")
                      Router.push("/recipe"+"?"+createQuery("query",dish.name))
                  }} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Explore Food
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>{Math.floor(Math.random()
        * (10 - 1 + 1)) + 1}K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>{(Math.floor(Math.random()
        * (10 - 1 + 1)) + 1)*10}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
       })}
     
 

</div>
 </div>
</section>
    </div>
  )
}

export default Menu
