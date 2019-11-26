import { cons } from '@hexlet/pairs';
import playGame from '..';
import generateRandom from '../generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxDigitForGenerateRandom = 100;
const minDigitForGenerateRandom = 0;

const isEven = (question) => question % 2 === 0;

const getAnswerQuestion = () => {
  const question = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
