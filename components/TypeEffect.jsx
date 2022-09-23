import Typewriter from 'typewriter-effect'

export default function TypeEffect() {
	return (
		<div>
			<h1>
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
