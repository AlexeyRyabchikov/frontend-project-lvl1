import { playGame, data } from '..';
import getNumber from '../generator';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEval = (question) => question % 2 === 0;

const answerQuestion = () => {
  const question = getNumber(1, 100);
  const correctAnswer = isEval(question) ? 'yes' : 'no';
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
