import React from 'react'
import Car from '../assets/car1.png'
const Analytics = () => 
{
    return (
        <div className='bg-black text-white py-16 px-4'>
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 ' src={Car} alt="/" />
            <div className='flex flex-col justify-center sm:text-left'>
                <h6 className='font-thin'>VISION</h6> <br />
                <h2 className='font-normal font-sans'>We’re Changing the Way the World Thinks About Cars</h2> <br />
                <p>Our vision is to transform the global perspective on cars, shifting the focus from mere transportation to innovation, sustainability, and cutting-edge technology, shaping a future where mobility is smarter, greener, and more accessible for all.</p>
            </div>
            </div>
        </div>
    )
}
export default Analytics