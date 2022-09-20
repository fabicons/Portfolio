import React from 'react'
import Image from 'next/image'
import AboutImage from '../public/assets/about.jpg'

const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#5651e5] dark:text-red-500'>
						About
					</p>
					<h2 className='py-4'>Who I am. </h2>
					<p className='py-2 text-gray-600 dark:text-gray-400'>
						I&apos;m an advertising & public relations graduate with experience
						as a sales manager in the tech industry.
					</p>
					<p className='py-2 text-gray-600 dark:text-gray-400'>
						{' '}
						I discoverd my passion for coding during the pandemic and decided to
						change my career path. I&apos;m hungry for knowledge and currently
						improving my skills in web development.
					</p>
					<p className='py-2 text-gray-600 dark:text-gray-400'>
						Recently, I was humbled to have been selected from 3000 candidates
						to be one of the 130 people who graduated from the{' '}
						<a
							className='underline'
							href='https://www.schoolofcode.co.uk/'
							target='_blank'
							rel='noopener noreferrer'
						>
							School of Code
						</a>{' '}
						(SoC) 16-week full-stack bootcamp. We were taught by industry
						experts and mentored by experienced developers. It was a challenging
						and rewarding experience that has given me the confidence to pursue
						a career as a development.
					</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 dark:bg-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image src={AboutImage} className='rounded-xl' alt='/' />
				</div>
			</div>
		</div>
	)
}

export default About
