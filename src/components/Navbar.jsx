import React ,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#000300] m-4'>MYCARS</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Technology</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Careers</li>
            </ul>
            <button className='bg-black text-white w-[150px] rounded-md font-medium my-6 mx-auto py-3'>Subscribe</button>
            <div onClick = {handleNav} className='block md:hidden'>
                {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
            </div>
            <div className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#f2f6f2] ease-in-out duration-500': 'fixed left-[100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#000300] m-4'>MYCARS</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Technology</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Careers</li>
                    <li className='p-4'>Subscribe</li>
                </ul>
            </div>
        </div> 
    );
};
export default Navbar