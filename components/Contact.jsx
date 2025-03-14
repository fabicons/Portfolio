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
				<div className='grid gap-8 lg:grid-cols-5'>
					{/* left */}
					<div className='w-full h-full col-span-3 p-4 shadow-lg lg:col-span-2 dark:border-2 shadow-gray-400 rounded-xl'>
						<div className='h-full lg:p-4'>
							<div>
								<Image
									className='duration-300 ease-in rounded-lg hover-scale-105'
									src={ContactImg}
									alt='/'
								/>
							</div>
							<div>
								<h2 className='py-2'>Fabian Deckmann</h2>
								<p>Front-End Developer</p>
								<p>
									I am available for freelance or full-time positions. Contact
									me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className='pt-8 uppercase'>Connect With Me</p>
								<div className='flex items-center justify-between py-4'>
									<a
										href='https://www.linkedin.com/in/fabian-deckmann/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='p-6 duration-300 ease-in border-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-600 hover:scale-110'>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://github.com/fabicons'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='p-6 duration-300 ease-in border-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-600 hover:scale-110'>
											<FaGithub />
										</div>
									</a>

									<a
										href='https://drive.google.com/file/d/1zMcmfWXUoIf9YAdXxXV0jhmvSkKZrufH/view?usp=sharing'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='p-6 duration-300 ease-in border-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-600 hover:scale-110'>
											<BsFillPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* right */}
					<div className='w-full h-auto col-span-3 border-2 shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://formsubmit.co/fabianfjaervik@gmail.com'
								method='POST'
							>
								<div className='grid w-full gap-4 py-2 md:grid-cols-2'>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>Name</label>
										<input
											className='flex p-3 border-2 border-gray-300 rounded-lg'
											type='text'
											name='name'
											required
										/>
									</div>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Phone Number
										</label>
										<input
											className='flex p-3 border-2 border-gray-300 rounded-lg'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Email</label>
									<input
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										type='email'
										name='email'
										required
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Subject</label>
									<input
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Message</label>
									<textarea
										className='p-3 border-2 border-gray-300 rounded-lg'
										rows='10'
										name='message'
									/>
								</div>
								<input type="hidden" name="_next" value ="https://ffjaervik.vercel.app/thankYou" />
								<button className='w-full p-4 mt-4 text-gray-100 dark:shadow-md dark:shadow-gray-300'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:border-2'>
							<HiOutlineChevronDoubleUp
								className='text-[#5651e5] dark:text-red-500 '
								size={30}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
