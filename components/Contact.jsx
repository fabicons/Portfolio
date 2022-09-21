import React from 'react'
import Image from 'next/image'
import ContactImg from '../public/assets/contact.jpg'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

function Contact() {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-red-500'>
					Contact
				</p>
				<h2 className='py-4'>Get in Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg dark:border-2 shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<Image
									className='rounded-lg hover-scale-105 ease-in duration-300'
									src={ContactImg}
									alt='/'
								/>
							</div>
							<div>
								<h2 className='py-2'>Fabian Deckmann</h2>
								<p>Front-End Developer</p>
								<p>
									I am available for freelance or full-time positions. Contact
									me and let&apos;talk
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>Connect With Me</p>
								<div className='flex items-center justify-between py-4'>
									<a
										href='https://www.linkedin.com/in/fabian-deckmann-fjaervik-9349b9153/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://github.com/ffjaervik'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>
									<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<a
										href='https://drive.google.com/file/d/1XpKpuT9o4HraVlVNFbgt-y1Er_qE3i3M/view?usp=sharing'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<BsFillPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-lg shadow-gray-400 border-2 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300'
										rows='10'
									/>
								</div>
								<button className='w-full p-4 text-gray-100 mt-4 dark:shadow-md dark:shadow-gray-300'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:border-2'>
							<HiOutlineChevronDoubleUp className='text-[#5651e5] dark:text-red-500 ' size={30} />
							
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
