import React from 'react'
const Dashboard = () => {
    return (
        <div className='bg-black text-white py-16 px-4'>
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16'>
                <div className=' p-10 px-14 m-16'>
                    <h6 className='text-sm font-extralight font-mono py-6'>CAREERS</h6>
                    <p className='text-2xl mb-14 pr-6 font-thin font-light tracking-wider'>We’re looking for innovative talent to join our team. See all positions and submit your CV.</p>
                    <button className="flex items-center border border-white rounded-lg px-4 py-2">
                <span className="mr-2">Openings</span>
                <span className="flex items-center justify-center border-l border-white pl-2">
                →
                </span>
                </button>
                </div>
                <div className='bg-black text-white w-[400px] flex flex-col p-4 my-4 rounded-3xl p-10 border-2 border-white hover:scale 105 duration-300'>
                    <h6 className='font-extralight text-xs tracking-widest py-6'>
                        ARTIFICIAL INTELLIGENCE RESEARCHER</h6>
                    <h3 className='text-2xl mb-14 pr-6 font-thin tracking-wider'> A different approach, using a new method of manufacturing.</h3>
                    <p className='py-7 pr-10'>An artificial intelligence researcher explores a groundbreaking approach using a novel method of manufacturing. This innovation enhances precision and efficiency, enabling machines to autonomously optimize production processes. By integrating AI with advanced fabrication techniques, the researcher aims to revolutionize industries, pushing the boundaries of what's technologically possible.</p>
                    <button className="flex items-center border border-white rounded-lg px-4 py-2 w-36">
                    <span className="mr-2">Apply Now</span>
                    <span className="flex items-center justify-center border-l border-white pl-2">
                    →
                    </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Dashboard