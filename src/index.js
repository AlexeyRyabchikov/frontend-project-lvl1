import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const playGame = (description, getAnswerQuestion) => {
  
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    const updateCreateDataPair = getAnswerQuestion();
    const correctAnswer = car(updateCreateDataPair);
    const nextQuestion = cdr(updateCreateDataPair);
    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (acc === 2 && correctAnswer === answer) return console.log(`Congratulations, ${name}!`);
    if (correctAnswer === answer) console.log('Correct!');
    if (correctAnswer !== answer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } return iter(acc + 1);
  };
  return iter(0);
};
