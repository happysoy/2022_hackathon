import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _userAbout = {
  id: _mock.id(1),
  cover: '/profile-back/song-heart.jpg',
  position: '웹 개발',
  follower: randomNumberRange(999, 99999),
  following: randomNumberRange(999, 99999),
  quote: '10분 이내로 답변해드립니다~',
  country: _mock.address.country(1),
  email: _mock.email(1),
  company: _mock.company(1),
  school: _mock.company(2),
  role: 'Manager',
  facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
  instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
  linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
  twitterLink: `https://www.twitter.com/caitlyn.kerluke`,
};

export const _userFollowers = [...Array(18)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: _mock.image.avatar(index),
  name: _mock.name.fullName(index),
  country: _mock.address.country(index),
  isFollowed: _mock.boolean(index),
}));

export const _userFriends = [...Array(18)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: _mock.image.avatar(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
}));

export const _userGallery = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  postAt: _mock.time(index),
  imageUrl: _mock.image.cover(index),
}));

export const _userFeeds = [
  {
    id: _mock.id(0),
    author: {
      id: _mock.id(8),
      avatarUrl: _mock.image.avatar(1),
      name: '왼손의 역습',
    },
    isLiked: true,
    createdAt: _mock.time(0),
    media: '/profile-back/song-heart.jpg',
    message: '친철하게 답변해주심',
    personLikes: [...Array(36)].map((_, index) => ({
      name: _mock.name.fullName(index),
      avatarUrl: '',
    })),
    comments: [
      {
        id: _mock.id(7),
        author: {
          id: _mock.id(8),
          avatarUrl: '/profile/soyeon.jpg',
          name: '김성균',
        },
        createdAt: _mock.time(2),
        message: 'ㄹㅇㅋㅋ',
      },
      {
        id: _mock.id(9),
        author: {
          id: _mock.id(10),
          avatarUrl: '/profile/soyeon.jpg',
          name: '정혜화',
        },
        createdAt: _mock.time(3),
        message: '핵공감',
      },
    ],
  },
  {
    id: _mock.id(1),
    author: {
      id: _mock.id(8),
      avatarUrl: _mock.image.avatar(1),
      name: '혜화동 불주먹',
    },
    isLiked: true,
    createdAt: _mock.time(0),
    media: 'null',
    message: '친철하게 답변해주심',
    personLikes: [...Array(36)].map((_, index) => ({
      name: _mock.name.fullName(index),
      avatarUrl: '',
    })),
    comments: [
      {
        id: _mock.id(7),
        author: {
          id: _mock.id(8),
          avatarUrl: '/profile/soyeon.jpg',
          name: '김성균',
        },
        createdAt: _mock.time(2),
        message: 'ㄹㅇㅋㅋ',
      },
    ],
  },
];

export const _userCards = [
  {
    id: _mock.id(0),
    avatarUrl: '/profile/dohyun.jpg',
    cover: '/profile-back/so-back.png',
    name: '유도현',
    doneAnswer: 14,
    rating: 4.87,
    totalPost: randomNumberRange(999, 99999),
    position: '빅데이터 분석 및 처리',
    quote: '10분 이내로 답변해드립니다~',
    facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
    school: '컴퓨터 교육과 3학년',
    email: 'yaho@g.skku.edu',
    country: '서울시 종로구',
    githubLink: `https://github.com/happysoy`,
    instagramLink: `https://www.instagram.com/`,
    mbti: 'infp',
    //
    // id: _mock.id(1),
    // cover: '/profile-back/song-heart.jpg',
    // position: '웹 개발',
    // follower: randomNumberRange(999, 99999),
    // following: randomNumberRange(999, 99999),
    // quote: '10분 이내로 답변해드립니다~',
    // country: _mock.address.country(1),
    // email: _mock.email(1),
    // company: _mock.company(1),
    // school: _mock.company(2),
    // role: 'Manager',
    // facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
    // instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
    // linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
    // twitterLink: `https://www.twitter.com/caitlyn.kerluke`,
  },
  {
    id: _mock.id(1),
    avatarUrl: '/profile/song.png',
    cover: '/profile-back/song-heart.jpg',
    name: '송진호',
    doneAnswer: 34,
    rating: 4.77,
    totalPost: randomNumberRange(999, 99999),
    position: '인공지능 자연어 처리',
  },
  {
    id: _mock.id(3),
    avatarUrl: '/profile/taewan.jpg',
    cover: '/profile-back/song-heart.jpg',
    name: '김태완',
    doneAnswer: 50,
    rating: 3.14,
    totalPost: randomNumberRange(999, 99999),
    position: '게임개발(Unreal-Engine)',
  },
  {
    id: _mock.id(4),
    avatarUrl: '/profile/soyeon.jpg',
    cover: '/profile-back/so-back.png',
    name: '정소연',
    doneAnswer: 40,
    rating: 4.5,
    totalPost: randomNumberRange(999, 99999),
    position: '웹 개발(React)',
  },
];

export const _userPayment = [...Array(2)].map((_, index) => ({
  id: _mock.id(index),
  cardNumber: ['**** **** **** 1234', '**** **** **** 5678', '**** **** **** 7878'][index],
  cardType: ['master_card', 'visa', 'master_card'][index],
}));

export const _userAddressBook = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  phone: _mock.phoneNumber(index),
  country: _mock.address.country(index),
  state: 'New Hampshire',
  city: 'East Sambury',
  street: '41256 Kamille Turnpike',
  zipCode: '85807',
}));

export const _userInvoices = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  createdAt: _mock.time(index),
  price: _mock.number.price(index),
}));

export const _userList = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: _mock.image.avatar(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  phoneNumber: _mock.phoneNumber(index),
  address: '908 Jack Locks',
  country: _mock.address.country(index),
  state: 'Virginia',
  city: 'Rancho Cordova',
  zipCode: '85807',
  company: _mock.company(index),
  isVerified: _mock.boolean(index),
  status: randomInArray(['active', 'banned']),
  role: _mock.role(index),
}));
