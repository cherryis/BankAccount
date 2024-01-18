'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Soon Ryu',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (item, i) {
    const type = item > 0 ? 'deposit' : 'withdrawal';
    const color = item > 0 ? 'green' : 'red';
    const background = item > 0 ? '#F3FFEB' : '#FFFAFC';

    const html = `
      <div class="movements__row" style="background : ${background}">
        <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
        </div>
        <div class="movements__value" style= "color : ${color}">${item}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html); // sort by input order
  });
};

displayMovements(account1.movements);

const createUsernames = accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}💶`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const deposits = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${deposits}€`;

  const withdrawal = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((inte, i, arr) => {
      console.log(arr);
      return inte >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE method
console.log(arr); //original array
console.log(arr.slice(4)); //  'e'
console.log(arr.slice(1)); // 'b', 'c', 'd', 'e'
console.log(arr.slice(2, 4)); // 'c', 'd'
console.log(arr.slice(-1)); //backward order of array 'e'
console.log(arr.slice(-2)); //backward order of array 'd', 'e'
console.log(arr.slice(1, -2)); // 'b', 'c'
console.log([...arr]); //shallow copy 'a', 'b', 'c', 'd', 'e'
console.log(arr.slice()); //shallow copy 'a', 'b', 'c', 'd', 'e'

// SPLICE method
console.log(arr); //original array
//console.log(arr.splice(2)); //extract 2 elements 'c', 'd', 'e'
console.log(arr); //remaining from original array 'a', 'b'
console.log(arr.splice(-1)); //'e'
console.log(arr); //remaining from original array 'a', 'b', 'c', 'd'
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - .....
 */

// ----------- for of loop -------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* console.log('----- for of loop ------');

// for (const mov of movements) {
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movements ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movements ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

console.log('----- foreach loop ------');
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movements ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movements ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */
// 0: function(200)
// 1: function(450)
// 2: function(400)
// .....

//  -- Map ----------
// console.log('-- Map -- foreach loop ---');

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// -----------
// const eurToUsd = 1.1;

//  const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
//  });
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

//  const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return`Movements ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movements ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
//  });

// --simplified version above
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// ------- filter only positive numbers
// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);
// // ---- same results with above
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrew = movements.filter(mov => mov < 0);
// console.log(withdrew);

// --- accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr)
//   {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur; }, 0);
// ---- same
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// // -------same
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// ---------
// const arr = [23,11,64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23

// // gettinh last array element
// console.log(arr[arr.length - 1]); //64
// console.log(arr.slice(-1)[0]); //64
// console.log(arr.at(-1)); // 64

// console.log('soon'.at(0)); // j
// console.log('soon'.at(-1)); // n

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);
