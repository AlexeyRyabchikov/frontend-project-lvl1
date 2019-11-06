import { playGame, data } from '..';
import getNumber from '../generator';

const rules = 'What number is missing in the progression?\n';

const nextNumber = (firstNumber, step, n) => {
  if (n > 1) {
    return firstNumber + step * (n - 1);
  }
  return firstNumber;
};

const getProgression = (firstNumber, step, n, xfactor) => {
  let result = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === xfactor) {
      result += '.. ';
    } else {
      result = `${result}${nextNumber(firstNumber, step, i)} `;
    }
  }
  return result;
};

const answerQuestion = () => {
  const firstNumber = getNumber(1, 100);
  const step = getNumber(1, 5);
  const n = 10;
  const xfactor = getNumber(1, n);
  const question = getProgression(firstNumber, step, n, xfactor);
  const correctAnswer = String(nextNumber(firstNumber, step, xfactor));
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
