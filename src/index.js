import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (description, getAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    if (acc === 3) return console.log(`Congratulations, ${name}!`);

    const updateCreateDataPair = getAnswerQuestion();
    const correctAnswer = car(updateCreateDataPair);
    const nextQuestion = cdr(updateCreateDataPair);

    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};
