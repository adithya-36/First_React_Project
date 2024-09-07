import React from 'react'
import evCar from '../assets/car2.jpg'
const Service = () => 
{
    return (
        <div className='max-w-[1400px] mx-auto h-[800px]  px-4 flex items-center'>
            <div className='w-[50vw] h-[90vh] rounded-sm sm:px-8'>
                <div className='font-extralight'>
                    <h6 className='mt-0 mb-10'>SERVICES</h6>  
                </div>
                <div className='w-[20vw] mb-20 text-2xl font-light font-sans tracking-widest
                '>We Deliver Exceptional Products and Services Around the World </div> 
                <div className='flex flex-row w-[80vw] h-[50vh] md:w-[80vw]'>
                    <div className='w-[50vw] h-[50vh] md:w-[30vw]'>
                        <h1 className='text-3xl tracking-widest font-thin mb-4'>AUTONOMOUS DRIVING</h1>
                        <p className='mb-10 '>We provide top-quality products and services globally, ensuring excellence in every delivery. With a commitment to innovation and customer satisfaction, we strive to meet diverse needs, enhancing value and building lasting relationships worldwide.</p>
                        <button className="flex items-center border border-black rounded-lg px-4 py-2">
                        <span className="mr-2">Read More</span>
                        <span className="flex items-center justify-center border-l border-black pl-2">
                          →
                        </span>
                        </button>
                        
                    
                    </div>
                    <div>
                        <img className='h-[45vh] w-[45vw]  px-4 mx-auto  ml-12 mr-0' src={evCar} alt="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service