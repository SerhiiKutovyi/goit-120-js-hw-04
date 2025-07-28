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

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]

// const propKey = 'author';
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(typeof book.translations);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment);

// const name = 'Henry Sibola';
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name);
// console.log(user.age);

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// for (const key in apartment) {
//   console.log(apartment[key]);
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// // const keys = [];
// // const values = [];

// // for (const key in apartment) {
// //   keys.push(key);
// //   values.push(apartment[key]);
// // }

// // console.log(keys, values);
// const key = Object.keys(apartment);

// console.log(key);

// const apartment = {
//   // descr: 'Spacious apartment in the city center',
//   // rating: 4,
//   // price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// console.log(Object.values(apartment));

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// const counts = Object.values(salaries);

// for (const count of counts) {
//   totalSalary += count;
// }
// return totalSalary;

// for (const key in salaries) {
//   totalSalary += salaries[key];
// }
// return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors, rgbColors);

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

const books = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
  { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 6.8,
  },
];

const titles = [];

for (const book of books) {
  titles.push(book.title);
}

console.log(titles);
