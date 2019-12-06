import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const questionsCount = 3;
export default (description, getAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const iter = (counter) => {
    if (counter === questionsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const dataGame = getAnswerQuestion();
    const correctAnswer = car(dataGame);
    const nextQuestion = cdr(dataGame);
    console.log(`Question: ${nextQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1);
  };
  return iter(0);
};
