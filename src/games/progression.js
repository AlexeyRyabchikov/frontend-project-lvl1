import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'What number is missing in the progression?\n';

const getProgressionMember = (first, step, counter) => {
  if (counter > 1) {
    return first + step * (counter - 1);
  }
  return first;
};

const getProgression = (first, step, counter, xfactor) => {
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
  const maxNumberForGetNumber = 100;
  const first = getNumber(maxNumberForGetNumber);
  const step = getNumber(5);
  const counter = 10;
  const xfactor = getNumber(1, counter);
  const question = getProgression(first, step, counter, xfactor);
  const correctAnswer = String(getProgressionMember(first, step, xfactor));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
