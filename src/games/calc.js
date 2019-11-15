import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'What is the result of the expression?\n';

const getAnswerQuestion = () => {
  const operatorList = ('+', '-', '*');
  const operator = operatorList[getNumber(operatorList.length)];
  const first = getNumber(100);
  const end = getNumber(100);
  const question = (`${first} ${operator} ${end}`);
  let correctAnswer = 0;
  switch (operator) {
    case '+': {
     correctAnswer = first + end;
     break;
    }
    case '-': {
      correctAnswer = first - end;
     break;
    }
    case '*': {
      correctAnswer = first * end;
     break;
    }
    default:
}
return createDataPair(`${correctAnswer}`, question);
};

export default () => playGame(description, getAnswerQuestion);
