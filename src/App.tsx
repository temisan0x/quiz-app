import React, { useState } from "react";
import { FaFire, FaThumbsUp, FaBook, FaPlay } from "react-icons/fa";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";
import { Loader } from "./components/Loader";
import { QuestionState, Difficulty, fetchQuizQuestions } from "./api/quiz";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;


const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Easy);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setError(null);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficulty,
      );
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setGameFinished(false);
    } catch (err) {
      setError("Failed to load questions. Please try again.");
      setGameOver(true);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      setGameFinished(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver && (
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          >
            <option value={Difficulty.Easy}>Easy</option>
            <option value={Difficulty.Medium}>Medium</option>
            <option value={Difficulty.Hard}>Hard</option>
          </select>
        )}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia} disabled={loading}>
            <FaPlay style={{ marginRight: "8px", fontSize: "0.8rem" }} />
            Start
          </button>
        ) : null}
        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers[number]}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 ? (
          <button className="next" onClick={nextQuestion}>
            {number === TOTAL_QUESTIONS - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        ) : null}

        {gameFinished && (
          <div className="results">
            <h2>Game Over!</h2>
            <p>
              You scored {score} out of {TOTAL_QUESTIONS}
            </p>
            <p>
              {score >= 7 ? (
                <>
                  <FaFire color="#ff5e31" /> Great job!
                </>
              ) : score >= 4 ? (
                <>
                  <FaThumbsUp color="#56ffa4" /> Not bad!
                </>
              ) : (
                <>
                  <FaBook color="#87f1ff" /> Keep practicing!
                </>
              )}
            </p>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default App;
