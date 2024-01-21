import React from 'react'
import '../Navb.css'

const Body = () => {
  return (
    <div>
        <img 
        style={{width: '100%'}}
        src='./headphones-dark.jpg'/>
        <button className='btn-shop'
        style={{
            position: 'absolute',
            bottom: 350,
            right: 300,
            fontWeight: 'bold',
            width: 150,
            height: 50,
        }}>Shop Now</button>
    </div>
  )
}

export default Body