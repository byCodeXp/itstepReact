import { nanoid } from 'nanoid';

export const initialContacts: Array<IContact> = [
  {
    id: nanoid(),
    name: 'Tony Stark',
    photo:
      'https://pbs.twimg.com/profile_images/1126537352753475584/xplgQOiK.jpg',
    email: 'ironman@gmail.com',
    phone: '+1234567890',
    age: 0,
    gender: 'male',
    status: 'Friend',
  },
  {
    id: nanoid(),
    name: 'Han Solo',
    photo:
      'https://www.looper.com/img/gallery/the-most-terrible-things-han-solo-has-ever-done/intro-1503575151.jpg',
    email: 'hansolo@gmail.com',
    phone: '+1234567890',
    age: 0,
    gender: 'male',
    status: 'Family',
  },
  {
    id: nanoid(),
    name: 'Baby Yoda',
    photo:
      'https://pchela.news/storage/app/uploads/public/2e6/e58/53a/thumb__770_490_0_0_crop.jpg',
    email: 'babyyoda@gmail.com',
    phone: '+1234567890',
    age: 0,
    gender: 'male',
    status: 'Friend',
  },
  {
    id: nanoid(),
    name: 'Beth Harmon',
    photo:
      'https://assets.vogue.com/photos/5fb52f5b71ab829af01992b9/4:3/w_2400,h_1800,c_limit/The-Queens-Gambit-vogue-171120-courtesy-Netflix-4.jpg',
    email: 'bethharmon@gmail.com',
    phone: '+1234567890',
    age: 0,
    gender: 'female',
    status: 'Friend',
  },
  {
    id: nanoid(),
    name: 'Guy',
    photo:
      'https://fs.kinomania.ru/image/file/film_trailer/6/63/663505be9a16bb557423d4d7af8f9cba.750.425.jpeg',
    email: 'guy@gmail.com',
    phone: '+1234567890',
    age: 0,
    gender: 'male',
    status: 'Friend',
  },
];

export const statusColors: Array<IStatus> = [
  {
     name: 'Friend',
     color: 'border-blue-400',
  },
  {
     name: 'Work',
     color: 'border-green-400',
  },
  {
     name: 'Family',
     color: 'border-yellow-400',
  },
];