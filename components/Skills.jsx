import React from 'react';
import Image from 'next/image';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import next from '../public/assets/skills/next.png';
import node from '../public/assets/skills/node.png';
import mongo from '../public/assets/skills/mongo.png';
import tailwind from '../public/assets/skills/tailwind.png';
import typescript from '../public/assets/skills/typescript.png';
import figma from '../public/assets/skills/figma.png';
import heroku from '../public/assets/skills/heroku.png';
import github from '../public/assets/skills/github1.png';
import netlify from '../public/assets/skills/netlify.png';
import postgre from '../public/assets/skills/postgre.png';
import vercel from '../public/assets/skills/vercel.png';

function Skills() {
// 	function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-red-500'>
					Skills
				</p>
				<h2 className='py-4'>What I can Do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 flex justify-center items-center shadow-lg border-2 dark:shadow-red-300 dark:border-2 dark:border-red-600 rounded-xl hover:scale-105 ease-in duration-300 '>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={html}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-lg dark:shadow-pink-400 dark:border-pink-400 dark:border-2 rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={css}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={javascript}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={react}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={next}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Next.js</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={tailwind}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={github}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={vercel}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Vercel</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={netlify}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Netlify</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={heroku}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Heroku</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={figma}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Figma</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={postgre}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>PostgreSQL</h3>
							</div>
						</div>
					</div>
					<div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={node}
									alt='/'
									width='64px'
									height='64px'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Node</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
