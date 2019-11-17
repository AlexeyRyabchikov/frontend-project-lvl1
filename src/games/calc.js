import { playGame, createDataPair } from '..';
import getDigit from '../generator';

const description = 'What is the result of the expression?\n';

const getAnswerQuestion = () => {
  const operatorList = ('+-*');
  const operator = operatorList[getDigit(operatorList.length - 1)];
  const maxNumberForGetDigit = 100;
  const first = getDigit(maxNumberForGetDigit);
  const end = getDigit(maxNumberForGetDigit);
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
