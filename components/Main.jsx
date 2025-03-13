import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import TypeEffect from './TypeEffect.jsx'
import Link from 'next/link'

const Main = () =>{ 
	return (
		<div id='home ' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div className=' md:text-base lg:text-lg'>
					<p className='uppercase tracking-widest  text-gray-600 dark:text-gray-400'>
						KEEP CALM & CODE ON
					</p>
					<h1 className='py-4 text-gray-700 dark:text-gray-200'>
						Hi, I&apos;m{' '}
						<span className='text-[#5651e5] dark:text-red-500'>Fabian.</span>
					</h1>
					<TypeEffect />
					<p className='py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto '>
						I&apos;m a full-stack developer with a passion for building
						beautiful, responsive websites. I have a background in web
						development and have a passion for learning new technologies.
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<a
							href='https://www.linkedin.com/in/fabian-deckmann/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaLinkedin />
							</div>
						</a>
						<a
							href='https://github.com/fabicons'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaGithub />
							</div>
						</a>
						<Link href='/#contact'>
							<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<AiOutlineMail />
							</div>
						</Link>
						<a
							href='https://drive.google.com/file/d/1zMcmfWXUoIf9YAdXxXV0jhmvSkKZrufH/view?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
