import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import icon from '../public/fabi_png_trans.png'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'react-icons/hi'

const Navbar = () => {
	const [shadow, setShadow] = useState(false)
	const [nav, setNav] = useState(false)
	const [navbg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const router = useRouter()
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	const renderThemeChanger = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className='h-6 w-6 text-gray-300'
					role='button'
					onClick={() => setTheme('light')}
				/>
			)
		} else {
			return (
				<MoonIcon
					className='h-6 w-6 text-gray-300'
					role='button'
					onClick={() => setTheme('dark')}
				/>
			)
		}
	}

	useEffect(() => {
		if (
			router.asPath === '/studyBudz' ||
			router.asPath === '/saunter'
			// || router.asPath === '/'
		) {
			setNavBg('transparent')
			setLinkColor('#ecf0f3')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router])

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
			<div className='flex justify-center items-center'>
				{renderThemeChanger()}
			</div>
			<div
				style={{ backgroundColor: `${navbg}` }}
				className={
					shadow
						? 'fixed w-full h-24 shadow-xl z-[100] transition-all duration-300 ease-in '
						: 'fixed w-full h-24 z-[100] '
				}
			>
				<div className='flex justify-between items-center h-full px-2 2xl:px-16'>
					<Link href='/'>
						<Image src={icon} alt='/' width='100' height='85' />
					</Link>

					<div>
						<ul
							style={{ color: `${linkColor}` }}
							className='hidden md:flex flex-auto'
						>
							<Link href='/'>
								<li className='ml-10 text-lg uppercase hover:border-b'>Home</li>
							</Link>
							<Link href='/#about'>
								<li className='ml-10 text-lg uppercase hover:border-b'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li className='ml-10 text-lg uppercase hover:border-b'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li className='ml-10 text-lg uppercase hover:border-b'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li className='ml-10 mr-5 text-lg uppercase hover:border-b'>
									Contact
								</li>
							</Link>
						</ul>
						{/* Burger Menu */}
						<div onClick={handleNav} className='md:hidden'>
							<AiOutlineMenu size={25} />
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
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
						}
					>
						<div>
							<div className='flex w-full items-center justify-between'>
								<Image
									src='/../public/fabi_png_trans.png'
									width='60'
									height='60'
									alt='/'
								/>
								<div
									onClick={handleNav}
									className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
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
							<div className='pt-40'>
								<p className='uppercase tracking-widest text-[#5651e5]'>
									Let&apos;s Connect
								</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaLinkedin />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<a href='https://drive.google.com/file/d/1XpKpuT9o4HraVlVNFbgt-y1Er_qE3i3M/view?usp=sharing'>
											<BsFillPersonLinesFill />
										</a>
									</div>
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
