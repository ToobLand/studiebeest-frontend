import { useState } from 'react';
import Request from '../../../../../utils/Request/Request';

const CreateLesson = () => {
	const [isTitle, setTitle] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isResult, setResult] = useState(false);

	const saveLesson = async () => {
		setLoading(true);
		const result = await Request('/lesson/new/', { title: isTitle });
		setLoading(false);
		setResult(result);
	};
	// q: what does SOLID stands for?

	return (
		<div>
			<input
				type='text'
				id='name'
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			{!isLoading && !isResult && (
				<button
					onClick={() => {
						saveLesson();
					}}
				>
					Les aanmaken
				</button>
			)}
		</div>
	);
};
export default CreateLesson;
