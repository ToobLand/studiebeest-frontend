import React, { useState } from 'react';

interface CreateQuestionProps {}

const CreateQuestion: React.FC<CreateQuestionProps> = () => {
	const [question, setQuestion] = useState('');
	const [answerPlaceholder, setAnswerPlaceholder] = useState('');
	const [correctAnswer, setCorrectAnswer] = useState('');
	const [isAnswering, setIsAnswering] = useState(false);

	const handleCreateQuestion = () => {
		// Implement logic to save the question and correct answer
		console.log('Question:', question);
		console.log('Answer Placeholder:', answerPlaceholder);
		console.log('Correct Answer:', correctAnswer);
		// Add API call or state management to save the question data
	};

	const handleQuestionClick = () => {
		setIsAnswering(true);
	};

	return (
		<div>
			<h2>Create Single Input Question</h2>
			<form>
				<div
					style={{ cursor: 'pointer', textDecoration: 'underline' }}
					onClick={handleQuestionClick}
				>
					{isAnswering ? (
						<label>
							Your Answer:
							<input
								type='text'
								placeholder={answerPlaceholder}
								value={correctAnswer}
								onChange={(e) => setCorrectAnswer(e.target.value)}
							/>
						</label>
					) : (
						<span>
							{question ||
								'Click here to define where the answer input will appear'}
						</span>
					)}
				</div>
				<br />
				<label>
					Answer Placeholder:
					<input
						type='text'
						value={answerPlaceholder}
						onChange={(e) => setAnswerPlaceholder(e.target.value)}
					/>
				</label>
				<br />
				<button type='button' onClick={handleCreateQuestion}>
					Create Question
				</button>
			</form>
		</div>
	);
};

export default CreateQuestion;
