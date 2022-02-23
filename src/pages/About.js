import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            {/* <div className='flex justify-center items-center h-screen'>
                <h1 className='text-5xl'>About Us</h1>
            </div> */}
            <div className='bg-light'>
                <h3 className='text-3xl text-center font-semibold p-2 text-darkbrown'>About Us</h3>
                <div className='overflow-auto flex sm:block items-center justify-center'>
                    <p className='text-lg leading-loose sm:leading-6 w-1/2 sm:w-full inline-block mt-4 mb-4 px-4 text-mddarkbrown font-medium text-justify p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eligendi ut tempora in ipsum, neque culpa modi odio quia quos excepturi, et aliquam assumenda aut eaque voluptas, temporibus ipsa praesentium? Ratione nisi laborum nulla dignissimos magnam, dolores placeat vitae voluptas nam itaque. Laboriosam eligendi recusandae veniam tempora, hic dolorem ipsam.</p>
                    <img className='w-1/2 sm:w-full px-4 inline-block' src="https://i.pinimg.com/564x/22/a0/c8/22a0c85b3d7281a810f0c64c19e408f4.jpg" alt="" />
                </div>

            </div>
        </Layout>
    );
};

export default About;
