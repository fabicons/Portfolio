import Typewriter from 'typewriter-effect'

export default function TypeEffect() {
	return (
		<div>
			<h1 className='text-gray-700 dark:text-gray-200'>
				<Typewriter
					options={{
						strings: [
							'A Full-Stack Developer',
							'A Software Engineer',
							"I'm breaking into tech",
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>
		</div>
	)
}
