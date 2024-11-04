import React, { useState } from 'react';

interface CreateQuestionProps {}

const CreateMultiplechoice: React.FC<CreateQuestionProps> = () => {
	const [question, setQuestion] = useState('');
	const [options, setOptions] = useState<string[]>(['', '']);
	const [correctOption, setCorrectOption] = useState('');

	const handleOptionChange = (index: number, value: string) => {
		const updatedOptions = [...options];
		updatedOptions[index] = value;
		setOptions(updatedOptions);
	};

	const handleAddOption = () => {
		setOptions([...options, '']);
	};

	const handleRemoveOption = (index: number) => {
		const updatedOptions = options.filter((_, i) => i !== index);
		setOptions(updatedOptions);
	};

	const handleCreateQuestion = () => {
		// Implement logic to save the question and options
		console.log('Question:', question);
		console.log('Options:', options);
		console.log('Correct Option:', correctOption);
		// Add API call or state management to save the question data
	};

	return (
		<div>
			<h2>Create Multiple Choice Question</h2>
			<form>
				<label>
					Question:
					<input
						type='text'
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Options:
					{options.map((option, index) => (
						<div key={index}>
							<input
								type='text'
								value={option}
								onChange={(e) => handleOptionChange(index, e.target.value)}
							/>
							<button type='button' onClick={() => handleRemoveOption(index)}>
								Remove
							</button>
						</div>
					))}
					<button type='button' onClick={handleAddOption}>
						Add Option
					</button>
				</label>
				<br />
				<label>
					Correct Option:
					<select
						value={correctOption}
						onChange={(e) => setCorrectOption(e.target.value)}
					>
						{options.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>
				<br />
				<button type='button' onClick={handleCreateQuestion}>
					Create Question
				</button>
			</form>
		</div>
	);
};

export default CreateMultiplechoice;
