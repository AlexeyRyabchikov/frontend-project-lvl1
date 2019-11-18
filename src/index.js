import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const createDataPair = (correctAnswer, question) => cons(correctAnswer, question);
const getCorrectAnswer = (point) => car(point);
const getQuestion = (point) => cdr(point);

export const playGame = (description, getAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    const updateCreateDataPair = getAnswerQuestion();
    const correctAnswer = getCorrectAnswer(updateCreateDataPair);
    const nextQuestion = getQuestion(updateCreateDataPair);
    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if ((acc === 2) && (correctAnswer === answer)) {
      return console.log(`Congratulations, ${name}!`);
    } if (correctAnswer === answer) console.log('Correct!');
    if (correctAnswer !== answer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } return iter(acc + 1);
  };
  return iter(0);
};
