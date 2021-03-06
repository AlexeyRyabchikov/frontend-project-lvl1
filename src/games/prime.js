import { cons } from '@hexlet/pairs';
import playGame from '..';
import generateRandom from '../generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxDigitForGenerateRandom = 1000;
const minDigitForGenerateRandom = 0;
const isPrime = (question) => {
  if (question < 2) return false;
  const sqrtQuestion = Math.floor(Math.sqrt(question)) + 1;
  for (let i = 2; i < sqrtQuestion; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};
const getAnswerQuestion = () => {
  const question = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(correctAnswer, question);
};
export default () => playGame(description, getAnswerQuestion);
