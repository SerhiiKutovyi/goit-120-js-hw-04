// const logins = ['m4ngoDoge', 'kiwiBad3st', 'PaliIScute', 'WagenRex'];
// const password = 'm4ngoDoge';
// let message = `User ${password} error!`;

// const message = logins.includes(password)
//   ? `User ${password} OK!`
//   : `User ${password} error!`;

// for (let i = 0; i < logins.length; i++) {
//   if (logins[i] === password) {
//     console.log(`User ${password} OK!`);
//   } else {
//     console.log(`User ${password} error!`);
//   }
// }

// for (const login of logins) {
//   if (login === password) {
//     message = `User ${password} OK!`;
//     break;
//   }
// }

// console.log(message);

const logins = [51, 18, 15, 14, 78, 62, 91, 65, 8];
let num = logins[0];

for (let i = 0; i < logins.length; i++) {
  if (num < logins[i]) {
    num = logins[i];
  }
}

console.log(num);
