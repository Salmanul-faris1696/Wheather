import React, { useState } from 'react'
import search from '../assets/images/search.png'
import cloud from '../assets/images/cloud.png'
import humidity from '../assets/images/humidity.png'
import wind from '../assets/images/wind.png'
import snow from '../assets/images/snow.png'
import rain from '../assets/images/rain.png'
import clear from '../assets/images/clear.png'
import drizzle from '../assets/images/drizzle.png'





const key = "bba3d8d9f463bdb30a35111d0895f496";


function One() {
    const[wicon,setwicon]=useState(cloud)


        const searchCity = async () => {
   
           const elements = document.getElementsByClassName('city');

           if(elements[0].value ==='')
           { 

            return 0;
           }

           let url =`https://api.openweathermap.org/data/2.5/weather?q=${elements[0].value}&units=metric&appid=${key}`

           let response = await fetch (url);

           let data = await response.json();

           const tempearture =document.getElementsByClassName("wheather--temp");

           const loctaion = document.getElementsByClassName("wheather--location");

           const humidity = document.getElementsByClassName("humidity--perecentage");

           const wind = document.getElementsByClassName("wind-Rate")

           console.log({data}, data?.weather);


           tempearture[0].innerHTML= `${data.main.temp} ℃` ;

           loctaion[0].innerHTML=data.name;

           humidity[0].innerHTML=`${data.main.humidity}%`;

           wind[0].innerHTML= `${data.wind.speed}km/h`;

           if(data.weather[0].icon=="01d" || data.weather[0].icon=="01n")
           {

            setwicon(clear)
           }
           else if(data.weather[0].icon=="02d" || data.weather[0].icon=="02n" )
           {
            setwicon(cloud)
           }

           else if(data.weather[0].icon=="03d" || data.weather[0].icon=="03n" )
           {
            console.log(data.weather[0].icon);     
                   setwicon(drizzle)
           }
           else if(data.weather[0].icon=="04d" || data.weather[0].icon=="04n" )
           {
            setwicon(drizzle)
           }
           else if(data.weather[0].icon=="09d" || data.weather[0].icon=="09n" )
           {
            setwicon(rain)
           }

           else if(data.weather[0].icon=="10d" || data.weather[0].icon=="10n" )
           {
            setwicon(rain)
           }
           else if(data.weather[0].icon=="13d" || data.weather[0].icon=="13n" )
           {
            setwicon(snow)
           }
           else{
            setwicon(clear)
           }


   
   
        }
    

  return (

    <div className='container w-[607px] h-[800px] m-auto mt-[75px] mb-[75px] rounded-[12px] bg-gradient-to-r from-sky-500 to-indigo-500 fle' >

        <div className="top-bar flex justify-center gap-[14px] pt-[60px]">

            <input type="text" className='city flex w-[362px] h-[70px] bg-[#ebfffc] rounded-[40px]   text-[#626262]  text-[20px] font-[500] font-serif pl-[30px] border border-sky-600 shadow-2xl' placeholder="Search" />

            <div className='search-btn flex justify-center items-center  w-[70px] h-[70px] bg-[#ebfffc] rounded-[40px] cursor-pointer  border border-sky-600 shadow-2xl'>

                <button onClick={() => {searchCity()}} ><img src={search} alt=""  className=''/> </button>

            </div>
        </div>

        <div className='wheather--img flex justify-center mt-[29px] sh'>
            <img src={wicon} alt="" />
        </div>



        <div className='wheather--temp flex justify-center text-white text-[80px] font-[400]'>
            
        </div>


        <div className='wheather--location flex justify-center text-[40px] font-[400] font-serif text-slate-700'>
            Search your location 
        </div>

        <div className="data--element mt-[50px] text-white flex justify-center text-center  ">

            <div className="element m-auto flex items-start gap-[12px]">
                <img src={humidity} alt=" " className='icon  mt-[10px] '/>
                <div className="data text-[30px] font-[500] font-sans text-center">
                    <div className="humidity--perecentage"> % </div>
                    <div className=" text-[20px] font-[400] font-serif text-yellow-400">  Humidity </div>
                </div>
            </div>

            <div className="element m-auto flex items-start gap-[12px]">
                <img src={wind} alt=" " className='icon mt-[10px]'/>
                <div className="data text-[30px] font-[500]">
                    <div className="wind-Rate"> km/hour </div>
                    <div className=" text-[20px] font-[400] font-serif text-teal-200">  Wind-Speed </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default One