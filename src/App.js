import { useState } from "react";

export default function App() {

	//states to amnage questions, answers and score
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	//hardwired questions
	const questions = [
		{
			questionText: 'What is the charm to defeat a Boggart',
			answerOptions: [
				{ answerText: 'Accio', isCorrect: false },
				{ answerText: 'Sectum Sempra', isCorrect: false },
				{ answerText: 'Riddikilus', isCorrect: true },
				{ answerText: 'Expelliarmus', isCorrect: false },
			],
		},
		{
			questionText: 'Who is ghost of gryffindor?',
			answerOptions: [
				{ answerText: 'Bloody Baron', isCorrect: false },
				{ answerText: 'Nearly Headless Nick', isCorrect: true },
				{ answerText: 'Peeves', isCorrect: false },
				{ answerText: 'Rubeena Ravenclaw', isCorrect: false },
			],
		},
		{
			questionText: 'Who is gaurding Dumbledore\'s office',
			answerOptions: [
				{ answerText: 'Phoenix', isCorrect: false },
				{ answerText: 'Gargoyle', isCorrect: true },
				{ answerText: 'Minerva', isCorrect: false },
				{ answerText: 'Fluffe', isCorrect: false },
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
	//hardwired questions

	//checking score
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
	//checking score

	return (

		<div className="app">
			<div className="col-lg-4 col-md-4 text-center col-xs-12 col-sm-12 m-auto my-5 bg-dark shadow-lg p-2 rounded text-white">
				<h3>Harry Potter Quiz</h3>
			</div>
			{showScore ? <div className='className="col-lg-4 col-md-4 text-center col-xs-12 col-sm-12 m-auto my-5 bg-dark shadow-lg p-2 rounded text-white"'>
				<p className="text-white">
					{score>1? (<h4>Congrats!</h4>) : (<span></span>) }
					You scored {score} out of {questions.length}</p>
			</div> : <>
				<div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 m-auto my-5 bg-dark shadow-lg p-2 rounded text-white">
					<div className="questions p-3">
						<div className="row">
							<div className="qcount">
								<span>Question {currentQuestion + 1} </span>/ {questions.length}
							</div>
						</div>
						<div className="row">
							<div className="qtext">
								{questions[currentQuestion].questionText}
							</div>
						</div>
						<div className="row text-white">
							<div className="answertext">
								<ul>
									{
										questions[currentQuestion].answerOptions.map(option => (
											<li><button onClick={() => handleAnswerOptionClick(option.isCorrect)} className="btn text-white asnbtn w-100 my-1"> {option.answerText} </button></li>
										))
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>}
			<div className="col-lg-4 col-md-4 text-center col-xs-12 col-sm-12 m-auto my-5 bg-dark shadow-lg p-2 rounded text-white">
				<small>made by Anurag Kasudhan</small>
			</div>
		</div>

	);

}