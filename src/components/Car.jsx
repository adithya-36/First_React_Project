import React from 'react'
import { ReactTyped } from "react-typed";
const Car = () => {
    return (
        <div className='text-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='text-gray-950 font-normal md:text-6xl sm:text-6xl text-4xl fond-bold md:py-6'>THE FUTURE OF <br /> MOBILITY IS HERE</h1>
                <p className='md:text-xl sm:text-4xl text-3xl font-extralight '>Discover the safest self-driving experience with MYCARS.</p>
                <div className=' text-center flex flex-col justify-center  items-center pl-2'>
                    <p className='  justify-center pl-2 items-center md:text-2xl  sm:text-3xl text-xl flex  '>You can find anything</p>
                    <ReactTyped className='md:text-2xl sm:text-3xl   font-bold md: pl-4 pl-2'
                    strings={[
                        "ecofriendly","classy","luxury",]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                    >
                    <input type="text" />
                    </ReactTyped>
                </div>
            </div>
        </div>
    );
};
export default Car