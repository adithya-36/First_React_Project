import React from 'react'
const Final = () => {
    return (
        <div className='bg-white text-black py-16 px-4'>
            <div className='max-w-[1400px] mx-auto  gap-16 '>
                <h5 className='font-bold tracking-widest text-lg p-6'>MYCARS</h5>
                <div className=' p-10 px-14 m-16 flex flex-row gap-8  grid md:grid-cols-3'>
                    <div className='py-3 font-light text-base'>
                        <h6 className='pb-8'>Technology</h6>
                        <h6 className='pb-8'>About</h6>
                        <h6>Careers</h6>
                    </div>
                    <div className='py-3 font-light text-base '>
                        <p className='pb-8'>Tel:9999999999</p>
                        <p className='pb-8'>Email: abc@gmail.com</p>
                        <p>abc road,Kerala,India</p>
                    </div>
                    <div className='font- py-3 font-light text-base '>
                        <h6 className='pb-8 text-lg font-normal'>SUBSCRIBE</h6>
                        <p className='pb-8'>Sign up to receive MYCARS news and updates.</p>
                        <div class="w-full max-w-xs">
                        <form>
                            <div class="mb-4">
                            <label class="block  text-base font-normal  mb-2" for="Email">
                                Email*
                            </label>
                            <input class=" shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="email"/>
                            <button className='bg-black text-white p-2 px-3 rounded-lg m-4 flex flex-col'>
                                Subscribe
                            </button>
                            </div>
                            <input type="checkbox"  /> Yes,subscribe me to your newsletter
                        </form>
                        </div>
                    </div>
                </div>
                <p class="text-center text-gray-500 text-xs">&copy;2024 Corp. All rights reserved.</p>
            </div>
        </div>
    );
};
export default Final