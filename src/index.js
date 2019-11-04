import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const data = (correctAnswer, question) => cons(correctAnswer, question);
const getCorrectAnswer = (point) => car(point);
const getQuestion = (point) => cdr(point);

export const playGame = (rules, answerQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    const newData = answerQuestion();
    const correctAnswer = getCorrectAnswer(newData);
    const nextQuestion = getQuestion(newData);
    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if ((acc === 2) && (correctAnswer === answer)) return console.log(`Congratulations, ${name}!`);
    if (correctAnswer !== answer) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};
