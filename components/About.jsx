import React from 'react';
import Image from 'next/image';
import AboutImage from '../public/assets/about.jpg';

const About = () => {
    return ( 
        <div id='about' className ='w-full md:h-screen p-2 flex items-center py-16' >
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='cal-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]' >About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>I have spend years as a Sales Manager working for an hotel technology company and a platic company- I know this and that and on my free time I spent time doing this and that. What I like most about oding is the abitity to create something from scratch. It&apos;s similarity to the arts are derived from the ability to create, hence creativity is required</p>
                    <p className='py-2 text-gray-600'>I am a full-stack developer with a passion for learning and a love for creating. I am currently working as a full-stack developer at the School of Code and I am currently working on a project called. </p>
                    <p className='py-2 text-gray-600'>Check out my latest work at:</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
                    <Image src={AboutImage} className='rounded-xl' alt='/'/>
                </div>
            </div>
         
        </div>
     );
}
 
export default About;