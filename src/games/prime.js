import { playGame, data } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  let result = Boolean;
  if (number === 1) result = false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) result = false;
  }
  return result;
};

const answerNumber = () => {
  const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const number = getNumber(1, 1000);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return data(correctAnswer, number);
};

export default () => playGame(rules, answerNumber);
