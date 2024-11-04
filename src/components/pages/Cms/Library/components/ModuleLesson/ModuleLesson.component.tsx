import { useState } from 'react';
import Request from '../../../../../utils/Request/Request';

const ModuleLesson = () => {
	const [titleModule, setTitleModule] = useState('');
	const [titleLesson, setTitleLesson] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isResult, setResult] = useState(false);

	const saveLesson = async () => {
		try {
			setLoading(true);
			const result = await Request('/lesson/new/', { titleLesson });
			setLoading(false);
			setResult(result);
		} catch (error) {
			// Handle error appropriately (e.g., log it or show a user-friendly message)
			console.error('Error while saving lesson:', error);
			setLoading(false);
		}
	};
	const saveModule = async () => {
		try {
			setLoading(true);
			const result = await Request('/module/new/', { titleModule });
			setLoading(false);
			setResult(result);
		} catch (error) {
			// Handle error appropriately (e.g., log it or show a user-friendly message)
			console.error('Error while saving module:', error);
			setLoading(false);
		}
	};
	return (
		<div>
			<div className='links'>
				<input
					type='text'
					id='name'
					onChange={(e) => setTitleModule(e.target.value)}
				/>
				{!isLoading && !isResult && (
					<button
						onClick={() => {
							saveModule;
						}}
					>
						Module aanmaken
					</button>
				)}
			</div>
			<div className='rechts'>
				<input
					type='text'
					id='name'
					onChange={(e) => setTitleLesson(e.target.value)}
				/>
				{!isLoading && !isResult && (
					<button
						onClick={() => {
							saveLesson;
						}}
					>
						Les aanmaken
					</button>
				)}
			</div>
		</div>
	);
};

export default ModuleLesson;
