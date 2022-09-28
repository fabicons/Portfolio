import Typewriter from 'typewriter-effect'

export default function TypeEffect() {
	return (
		<div>
			<h1 className='text-gray-700 dark:text-gray-200'>
				<Typewriter
					options={{
						strings: [
							'A Web Developer.',
							'A Full-Stack Developer.',
							'A Software Engineer.',
							'Nice to meet you.'
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>
		</div>
	)
}
