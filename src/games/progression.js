import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'What number is missing in the progression?\n';

const getProgressionMember = (start, step, counter) => {
  if (counter > 1) {
    return start + step * (counter - 1);
  }
  return start;
};

const getProgression = (start, step, counter, xfactor) => {
  let result = '';
  for (let i = 1; i <= counter; i += 1) {
    if (i === xfactor) {
      result = `${result}${'.. '}`;
    } else {
      result = `${result}${getProgressionMember(start, step, i)} `;
    }
  }
  return result;
};

const getAnswerQuestion = () => {
  const start = getNumber(1, 100);
  const step = getNumber(1, 5);
  const counter = 10;
  const xfactor = getNumber(1, counter);
  const question = getProgression(start, step, counter, xfactor);
  const correctAnswer = String(getProgressionMember(start, step, xfactor));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
