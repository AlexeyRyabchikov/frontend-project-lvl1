import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const questionCount = 3;
export default (description, getAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const iter = (counter) => {
    if (counter === questionCount) return console.log(`Congratulations, ${name}!`);
    const dataPair = getAnswerQuestion();
    const correctAnswer = car(dataPair);
    const nextQuestion = cdr(dataPair);
    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    console.log('Correct!');
    return iter(counter + 1);
  };
  return iter(0);
};
