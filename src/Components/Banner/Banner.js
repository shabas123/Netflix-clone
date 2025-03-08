import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import { API_KEY } from '../../constants/constants'

function Banner() {
 
 const [Movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.result[0]);
    
})
  }, [])
  return (
    <div className='banner'>
        <div className='content'>
          <h1 className='title'></h1>
          <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>

          </div>
          <h1 className='discription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique totam quis velit perspiciatis, nostrum incidunt doloremque? Odio, modi pariatur.</h1>
        </div>
       
        <div className="fade_bottom"></div>
      
      
    </div>
  )
}

export default Banner