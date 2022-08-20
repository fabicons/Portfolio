import React from 'react';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import crypto from '../public/assets/projects/crypto.jpg';
import netflix from '../public/assets/projects/netflix.jpg';

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built </h2>
            <div className='grid md:grid-cols-2 gap-8'>
            {/* PROJECTS WILL GO IN HERE. NOTE: IMPORT THE PROJECT FROM ASSETS AND INJECT IT IN THE "backgroundImg" property  FILL & UNCOMMENT*/}
                <ProjectItem title='StudyBudz' 
                backgroundImg={crypto} 
                projectUrl='/studyBudz'
                />
                <ProjectItem title='Saunter' 
                backgroundImg={netflix} 
                projectUrl='/saunter'
                />
                {/* <ProjectItem title='Project Name' 
                backgroundImg={} 
                projectUrl='/projectURL'
                />
                <ProjectItem title='Project Name' 
                backgroundImg={} 
                projectUrl='/projectURL'
                /> */}
            </div>
        </div>
    </div>
  )
}

export default Projects