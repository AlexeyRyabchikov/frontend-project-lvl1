import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getDigit from '../generator';

const description = 'What number is missing in the progression?';

const maxNumberForGetDigit = 100;
const minNumberForGetDigit = 0;
const maxNumberForStep = 5;
const minNumberForStep = 1;
const minNumberForXfactor = 1;
const maxNumberForXfactor = 10;

const getProgressionMember = (first, step, counter) => {
  if (counter > 1) {
    return first + step * (counter - 1);
  }
  return first;
};

const getQuestion = (first, step, counter, xfactor) => {
  let result = '';
  for (let i = 1; i <= counter; i += 1) {
    if (i === xfactor) {
      result = `${result}${'.. '}`;
    } else {
      result = `${result}${getProgressionMember(first, step, i)} `;
    }
  }
  return result;
};

const getAnswerQuestion = () => {
  const first = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const step = getDigit(maxNumberForStep, minNumberForStep);
  const counter = 10;
  const xfactor = getDigit(maxNumberForXfactor, minNumberForXfactor);
  const question = getQuestion(first, step, counter, xfactor);
  const correctAnswer = String(getProgressionMember(first, step, xfactor));
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
