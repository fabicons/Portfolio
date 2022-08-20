import React from 'react'
import netflix from '../public/assets/projects/netflix.jpg'
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
					src={netflix}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Saunter</h2>
					<h3>ReactJS / Tailwind / Firebase</h3>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p>Saunter</p>
					<h2>Overview</h2>
					<p>
						Saunter was a project during a one week project of the School of
						code. Add extra text Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae facere ipsam ducimus sint eveniet nesciunt magnam veniam, quia iste minus natus accusantium. Beatae magni, veritatis sunt quasi officia totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nobis non tenetur sit totam labore necessitatibus dolor repudiandae tempora voluptates facilis nam sed eum consequuntur inventore, recusandae ea blanditiis reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium maxime nesciunt distinctio, facere quibusdam ratione aut quis, odit facilis veniam deleniti sed in perferendis. Assumenda rem est fuga cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In reprehenderit, nisi explicabo aliquid vero molestiae et laborum facilis totam. Consequuntur maxime at vitae, sequi sunt odio recusandae. Nostrum, dignissimos facere.
					</p>
					<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					<button className='px-8 py-2 mt-4'>Code</button>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Google API
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Zillow API
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
