import { playGame, data } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEval = (number) => number % 2 === 0;

const answerNumber = () => {
  const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const number = getNumber(1, 100);
  const correctAnswer = isEval(number) ? 'yes' : 'no';
  return data(correctAnswer, number);
};

export default () => playGame(rules, answerNumber);
