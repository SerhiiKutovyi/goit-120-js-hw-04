const logins = ['m4ngoDoge', 'kiwiBad3st', 'PaliIScute', 'WagenRex'];
const password = 'PaliIScute';
let message = '';

// logins.join(' ').includes(password)
//   ? console.log(`User ${password} OK!`)
//   : console.log(`User ${password} error!`);

// for (let i = 0; i < logins.length; i++) {
//   if (logins[i] === password) {
//     console.log(`User ${password} OK!`);
//   } else {
//     console.log(`User ${password} error!`);
//   }
// }

for (const login of logins) {
  if (login === password) {
    message = `User ${password} OK!`;
    break;
  }
  message = `User ${password} error!`;
}

console.log(message);
