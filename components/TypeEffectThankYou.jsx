import Typewriter from 'typewriter-effect'

export default function TypeEffectThankYou() {
	return (
		<div>
			<h1 className='text-gray-700 dark:text-gray-200'>
				<Typewriter
					options={{
						strings: [
							'Thank you!',
							'You Rock! 🤘',
							'Did you know that lobsters never stop growing? 🦞🤯',
                            'You are awesome! 🤩',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>
		</div>
	)
}