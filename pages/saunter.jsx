import React from 'react'
import saunterimg from '../public/assets/projects/saunter.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

function saunter() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={saunterimg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Saunter</h2>
					<h3>Next.js</h3>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p className='mb-1'>Saunter</p>
					<h2 className='mb-4'>Overview</h2>
					<p>
						Saunter is the result of the final project of the School of Code
						Bootcamp. The cohort was divided in teams of 6 in order to recreate
						a developer team. Following the Agile methodology, we worked in
						1-week sprints, with daily stand-ups and retrospectives. The project
						was to create a full-stack web application.
					</p>
					<p>
						As a result Saunter was created. It is a travelling app that aims to
						aid solo travellers in finding new places to visit and meet new
						people.{' '}
					</p>
					<button className='px-8 py-2 mt-4 mr-8'>
						{' '}
						<a
							href='https://final-project-front-end-team-saunter.vercel.app/'
							target='_blank'
							rel='noreferrer noopener'
						>
							Demo
						</a>
					</button>
					<button className='px-8 py-2 mt-4'>
						{' '}
						<a
							href='https://github.com/ffjaervik/saunter-front-end'
							target='_blank'
							rel='noreferrer noopener'
						>
							Code
						</a>
					</button>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Next.js
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS Modules
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Node / Express
							</p>

							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> PostgreSQL
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Chakra UI
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline cursor-pointer'>back</p>
				</Link>
			</div>
		</div>
	)
}

export default saunter
