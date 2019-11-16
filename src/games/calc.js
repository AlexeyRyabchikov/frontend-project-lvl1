import { playGame, createDataPair } from '..';
import getDigit from '../generator';

const description = 'What is the result of the expression?\n';

const getAnswerQuestion = () => {
  const operatorList = ('+-*');
  const operator = operatorList[getDigit(operatorList.length)];
  const maxNumberForGetNumber = 100;
  const first = getDigit(maxNumberForGetNumber);
  const end = getDigit(maxNumberForGetNumber);
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
