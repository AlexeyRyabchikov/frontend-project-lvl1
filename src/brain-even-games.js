import readlineSync from 'readline-sync';

export const showRules = console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
export const greetUser = readlineSync.question('May I have your name? ');
console.log(`Hello, ${greetUser}!`);

const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const number = getNumber(1, 100);
const isEval = getNumber(1, 100) % 2 === 0 ? 'yes' : 'no';

export const answer = readlineSync.question(`Question: ${number}\nYour answer: `, {
  trueValue: [isEval === 'yes'],
  falseValue: [isEval === 'no'],
});
for (let i = 0; i < 2; i += 1) {
  if (answer !== isEval) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEval}'\nLet's try again, ${greetUser}!`);
    break;
  } if (answer === isEval) {
    readlineSync.question(`Question: ${getNumber(1, 100)}\nYour answer: `, {
      trueValue: [isEval === 'yes'],
      falseValue: [isEval === 'no'],
    });
    console.log('Correct!');
  } if (i === 1) {
    console.log(`Congratulations, ${greetUser}!`);
  }
}
