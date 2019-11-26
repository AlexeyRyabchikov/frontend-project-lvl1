import { cons } from '@hexlet/pairs';
import playGame from '..';
import generateRandom from '../generator';

const description = 'What number is missing in the progression?';

const maxDigitForGenerateRandom = 100;
const minDigitForGenerateRandom = 0;
const maxDigitForStep = 5;
const minDigitForStep = 1;
const minDigitForHiddenElement = 0;
const maxDigitForHiddenElement = 9;
const progressionLength = 9;

const getQuestion = (first, step, counter, hiddenElement) => {
  let result = '';
  for (let i = 0; i <= counter; i += 1) {
    if (first === 0) result = `${first}`;
    if (i === hiddenElement) result = `${result}${'.. '}`;
    else result = `${result}${first + step * (i - 1)} `;
  }
  return result;
};

const getAnswerQuestion = () => {
  const first = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const step = generateRandom(minDigitForStep, maxDigitForStep);
  const hiddenElement = generateRandom(minDigitForHiddenElement, maxDigitForHiddenElement);
  const question = getQuestion(first, step, progressionLength, hiddenElement);
  const correctAnswer = String(first + step * (hiddenElement - 1));
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
