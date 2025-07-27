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

// const logins = [51, 18, 15, 14, 78, 62, 91, 65, 8];
// let num = logins[0];

// for (let i = 0; i < logins.length; i++) {
//   if (num < logins[i]) {
//     num = logins[i];
//   }
// }

// console.log(num);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };

// console.log(typeof genres);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

console.log(apartment);
