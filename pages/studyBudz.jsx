import React from 'react'
import studyBudzImg from '../public/assets/projects/studybudz.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

function studyBudz() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={studyBudzImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h1 className='py-2'>StudyBudz</h1>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p className='mb-1 dark:text-gray-300'>StudyBudz</p>
					<h2 className='mb-4'>Overview</h2>
					<p className='dark:text-gray-300 text-xl'>
						Study Budz is the result of the mid-term project of the School of
						Code Bootcamp. The students were given one week (Mon - Fri) to come
						up with a working product in relation to the brief.
						<br></br>
						The brief was to come up with a product that enhances coding
						bootcamp stundent&apos;s life during the intensive course. StudyBudz
						aims to assist bootcampers by offering additional lessons by
						students
						<em> for</em> students, to improve their skills during their own
						time. Follow the links below to check out the Github repository.
					</p>
					<button className='px-8 py-2 mt-4 dark:shadow-gray-500'>
						{' '}
						<a
							href='https://github.com/ffjaervik/StudyBudz_Front-end'
							target='_blank'
							rel='noreferrer noopener'
						>
							Code
						</a>
					</button>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-lg border-2 shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS
							</p>
							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>

							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Node / Express
							</p>
							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> REST API
							</p>
							<p className='py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> PostgreSQL
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

export default studyBudz
