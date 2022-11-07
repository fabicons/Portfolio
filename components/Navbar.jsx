import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import icon from '../public/fabi_png_trans.png'
import { useTheme } from 'next-themes'

const Navbar = () => {
	const [shadow, setShadow] = useState(false)
	const [nav, setNav] = useState(false)
	const [navbg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const router = useRouter()
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// THEME SWITCHER LOGIC	let dark = 'dark'
	let dark = 'dark'
	let light = 'light'
	useEffect(() => setMounted(true), [])

	const renderThemeChanger = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		if (currentTheme === dark) {
			console.log('dark')
			return (
				<div className=' flex relative justify-center items-center '>
					<button
						className='px-2 py-1 text-base '
						onClick={() => setTheme(light)}
					>
						{' '}
						Toggle Light Mode{' '}
					</button>
				</div>
			)
		} else {
			console.log('light')
			return (
				<div className=' flex relative justify-center items-center'>
					<button
						className='px-2 py-1 text-base text-white'
						onClick={() => setTheme(dark)}
					>
						{' '}
						Toggle Dark Mode{' '}
					</button>
				</div>
			)
		}
	}
	// END THEME SWITCHER LOGIC

	// CUSTOM NAVBAR FOR DEFINED PATHS
	useEffect(() => {
		if (
			router.asPath === '/studyBudz' ||
			router.asPath === '/saunter'
			// || router.asPath === '/'
		) {
			setNavBg('transparent')
			setLinkColor('#ecf0f3')
		} else if (theme == dark) {
			setNavBg('#1f2937')
			setLinkColor('#ecf0f3')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router, theme])

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])

	return (
		<>
			<div
				style={{ backgroundColor: `${navbg}` }}
				className={
					shadow
						? 'fixed w-full h-24 shadow-xl z-[100] transition-all duration-300 ease-in dark:shadow-lg dark:shadow-gray-400 '
						: 'fixed w-full h-24 z-[100] '
				}
			>
				<div className='flex justify-between items-center h-full px-2 2xl:px-16'>
					<Link href='/'>
						<Image src={icon} alt='/' width='100' height='85' />
					</Link>
					{/* Theme Toggle */}
					<div className='flex justify-start '>{renderThemeChanger()}</div>

					<div>
						<ul
							style={{ color: `${linkColor}` }}
							className='hidden md:flex flex-auto'
						>
							<Link href='/'>
								<li className='ml-10 text-lg uppercase hover:border-b hover:border-b-black dark:hover:border-b-[#ecf0f3] '>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li className='ml-10 text-lg uppercase hover:border-b hover:border-b-black dark:hover:border-b-[#ecf0f3] '>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li className='ml-10 text-lg uppercase hover:border-b hover:border-b-black dark:hover:border-b-[#ecf0f3] '>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li className='ml-10 text-lg uppercase hover:border-b hover:border-b-black dark:hover:border-b-[#ecf0f3] '>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li className='ml-10 mr-5 text-lg uppercase hover:border-b hover:border-b-black dark:hover:border-b-[#ecf0f3] '>
									Contact
								</li>
							</Link>
						</ul>
						{/* Burger Menu */}
						<div onClick={handleNav} className='md:hidden'>
							<AiOutlineMenu size={25} className='dark:text-[#ecf0f3]' />
						</div>
					</div>
				</div>
				<div
					className={
						nav
							? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
							: ''
					}
				>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
						}
					>
						<div>
							<div className='flex w-full items-center justify-between'>
								<Image src={icon} width='60' height='60' alt='/' />
								<div
									onClick={handleNav}
									className='rounded-full shadow-lg  border-2 shadow-gray-400 p-3 cursor-pointer'
								>
									<AiOutlineClose />
								</div>
							</div>
							<div className='border-b border-gray-300 my-4'>
								<p className='w-[85%] md:w-[90%] py-4'>
									Let&apos;s build something legendary together
								</p>
							</div>
						</div>
						<div className='py-4 flex-col'>
							<ul className='uppercase'>
								<Link href='/'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Home
									</li>
								</Link>
								<Link href='/#about'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										About
									</li>
								</Link>
								<Link href='/#skills'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Skills
									</li>
								</Link>
								<Link href='/#projects'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Projects
									</li>
								</Link>
								<Link href='/#contact'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Contact
									</li>
								</Link>
							</ul>
							<div className='mt-10'>
								<p className='uppercase tracking-widest text-[#5651e5] dark:text-red-500'>
									Let&apos;s Connect
								</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
									<a
										href='https://www.linkedin.com/in/fabian-deckmann-fjaervik-9349b9153/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg  border-2 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
											<FaLinkedin />
										</div>
									</a>
									<a
										href='https://github.com/ffjaervik'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg  border-2 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>
									<Link href='/#contact' >
										<div onClick={handleNav} className='rounded-full shadow-lg border-2 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
											<AiOutlineMail />
										</div>
									</Link>
									<a
										href='https://drive.google.com/file/d/1ag2x1RbNEG0N70TmSuFo3eJpg7Nd5Vi_/view?usp=sharing'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='rounded-full shadow-lg border-2 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
											<BsFillPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
