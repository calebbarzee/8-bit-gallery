import React, { useState, useEffect } from 'react';
import db from '../firebase/firebase-config'
import './QuizPage.css';

function QuizPage() {

	// write script to generate json file formatted similarly to this js dict.
	// import json and images into firebase.
	// write quiz to use data from firebase.
	// make sure admin uploads are storing data properly in firebase.
	const [answers, setAnswers] = useState([]);
	const fetchAnswers = async() => {
	const response = db.collection('artworks');
	const data = await response.get();
	data.docs.forEach(item=>{
		setAnswers([...answers,item.data()])
	})
	}
	useEffect(() => {
	fetchAnswers();
	}, [])

	console.log(answers)
	// const [questions, setQuestions] = useState([]);

	function populate_questions() {

		const questions = [
			{
				questionText: 'What is the capital of France?',
				answerOptions: [
					{ answerText: 'New York', isCorrect: false },
					{ answerText: 'London', isCorrect: false },
					{ answerText: 'Paris', isCorrect: true },
					{ answerText: 'Dublin', isCorrect: false },
				],
			},
			{
				questionText: 'Who is CEO of Tesla?',
				answerOptions: [
					{ answerText: 'Jeff Bezos', isCorrect: false },
					{ answerText: 'Elon Musk', isCorrect: true },
					{ answerText: 'Bill Gates', isCorrect: false },
					{ answerText: 'Tony Stark', isCorrect: false },
				],
			},
			{
				questionText: 'The iPhone was created by which company?',
				answerOptions: [
					{ answerText: 'Apple', isCorrect: true },
					{ answerText: 'Intel', isCorrect: false },
					{ answerText: 'Amazon', isCorrect: false },
					{ answerText: 'Microsoft', isCorrect: false },
				],
			},
			{
				questionText: 'How many Harry Potter books are there?',
				answerOptions: [
					{ answerText: '1', isCorrect: false },
					{ answerText: '4', isCorrect: false },
					{ answerText: '6', isCorrect: false },
					{ answerText: '7', isCorrect: true },
				],
			},
		];
		return questions
	}

	const questions = populate_questions();
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default QuizPage;