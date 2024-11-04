import React, { useState } from 'react';

interface EditQuestionProps {
	existingQuestion: string;
	existingAnswerPlaceholder: string;
	existingCorrectAnswer: string;
}

const EditQuestion: React.FC<EditQuestionProps> = ({
	existingQuestion,
	existingAnswerPlaceholder,
	existingCorrectAnswer,
}) => {
	const [question, setQuestion] = useState(existingQuestion);
	const [answerPlaceholder, setAnswerPlaceholder] = useState(
		existingAnswerPlaceholder,
	);
	const [correctAnswer, setCorrectAnswer] = useState(existingCorrectAnswer);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditQuestion = () => {
		// Implement logic to save the edited question and correct answer
		console.log('Edited Question:', question);
		console.log('Edited Answer Placeholder:', answerPlaceholder);
		console.log('Edited Correct Answer:', correctAnswer);
		// Add API call or state management to save the edited question data
	};

	const handleQuestionClick = () => {
		setIsEditing(true);
	};

	return (
		<div>
			<h2>Edit Single Input Question</h2>
			<form>
				<div
					style={{ cursor: 'pointer', textDecoration: 'underline' }}
					onClick={handleQuestionClick}
				>
					{isEditing ? (
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
				<button type='button' onClick={handleEditQuestion}>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default EditQuestion;
