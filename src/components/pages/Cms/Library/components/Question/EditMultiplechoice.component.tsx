import React, { useState, useEffect } from 'react';

interface EditQuestionProps {
	existingQuestion: string;
	existingOptions: string[];
	existingCorrectOption: string;
}

const EditQuestion: React.FC<EditQuestionProps> = ({
	existingQuestion,
	existingOptions,
	existingCorrectOption,
}) => {
	const [question, setQuestion] = useState(existingQuestion);
	const [options, setOptions] = useState<string[]>(existingOptions);
	const [correctOption, setCorrectOption] = useState(existingCorrectOption);

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

	const handleEditQuestion = () => {
		// Implement logic to save the edited question and options
		console.log('Edited Question:', question);
		console.log('Edited Options:', options);
		console.log('Edited Correct Option:', correctOption);
		// Add API call or state management to save the edited question data
	};

	useEffect(() => {
		// Update state when the props change (e.g., when editing another question)
		setQuestion(existingQuestion);
		setOptions(existingOptions);
		setCorrectOption(existingCorrectOption);
	}, [existingQuestion, existingOptions, existingCorrectOption]);

	return (
		<div>
			<h2>Edit Multiple Choice Question</h2>
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
				<button type='button' onClick={handleEditQuestion}>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default EditQuestion;
