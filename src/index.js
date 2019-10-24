import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const data = (correctAnswer, number) => cons(correctAnswer, number);
const getCorrectAnswer = (point) => car(point);
const number = (point) => cdr(point);

export const playGame = (rules, answerData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    const data = answerData();
    const correctAnswer = getCorrectAnswer(data);
    const goodNumber = number(data);
    console.log(`Question: ${goodNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (acc === 2) return console.log(`Congratulations, ${name}!`);
    if (correctAnswer !== answer) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'\nLet's try again, ${name}!`);
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};
