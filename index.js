function App() {
  // https://github.com/chrisblakely01/quiz-app/blob/master/starter/src/App.js
  // Sample questions
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     let quizSet = [];
  //     let item = {};
  //     const url= "https://opentdb.com/api.php?amount=50&category=22&type=multiple";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setQuiz(data);
  //     console.log(data)

  //   fetchData();
  // }, [])

  const Header = () => {
    const title = "#6 React Quiz App";
    return <div class="header h1">{title}</div>;
  };

  const Ref = () => {
    const url = "https://youtu.be/Lya-qYiDqIA";
    return (
      <div class="ref">
        (Ref:{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {url})
        </a>
      </div>
    );
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
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
    <div>
      <Header />
      <Ref />
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
