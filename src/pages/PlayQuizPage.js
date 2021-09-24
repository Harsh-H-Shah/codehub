import React, { useState } from 'react';
import QuestionDisplay from '../components/QuestionDisplay';
import EndScreen from '../components/EndScreen';
import { Quizzes } from '../resources/Questions';

const PlayQuizPage = ({ selectQuiz }) => {
  const list = Quizzes[selectQuiz].questions;
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState('display');
  return (
    <div>
      {quizState === 'display' ? (
        <QuestionDisplay
          selectQuiz={selectQuiz - 1}
          setQuizState={setQuizState}
          score={score}
          setScore={setScore}
          list={list}
        />
      ) : (
        <EndScreen score={score} setQuizState={setQuizState} list={list} />
      )}
    </div>
  );
};

export default PlayQuizPage;
