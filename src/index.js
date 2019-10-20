import readlineSync from 'readline-sync';

export const greetUser = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const hello = console.log(`Hello, ${greetUser}!`);
