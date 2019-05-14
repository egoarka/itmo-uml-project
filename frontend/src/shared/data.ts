import nanoid from 'nanoid';

export type TAdvertStatus = 'done' | 'working' | 'waiting';

export interface Advert {
  id: string;
  name: string;
  author: string;
  description: string;
  responses: string[];
  status: TAdvertStatus;
}

export interface User {
  id: string;
  name: string;
  role: string;
}

export interface Response {
  id: string;
  author: string;
  body: string;
}

const user1Id = nanoid();
const user2Id = nanoid();

const advert1Id = nanoid();
const advert2Id = nanoid();

const response1Id = nanoid();
const response2Id = nanoid();

export const defaultState = {
  users: [
    {
      id: user1Id,
      name: 'Oleg Vladimirovich',
      role: 'customer',
    },
    {
      id: user2Id,
      name: 'Andrey Petrov',
      role: 'freelancer',
    },
  ],
  responses: [
    {
      id: response1Id,
      author: user2Id,
      body: 'I want this work to get done',
    },
    {
      id: response2Id,
      author: user2Id,
      body: 'I want this work to get done',
    },
  ],
  adverts: [
    {
      id: advert1Id,
      name: 'Make C# server',
      author: user1Id,
      description:
        'I thought this salad was exceptionally delicious and healthy. I recommend\npressing the entire tofu block for at least 20 minutes before to remove\nexcess water in the ...',
      responses: [response1Id, response2Id],
      status: 'done',
    },
    {
      id: advert2Id,
      name: 'Make js server',
      author: user1Id,
      description:
        'I thought this salad was exceptionally delicious and healthy. I recommend\npressing the entire tofu block for at least 20 minutes before to remove\nexcess water in the ...',
      responses: [],
      status: 'working',
    },
  ],
  userSession: {
    user: {},
  },
} as {
  users: User[];
  responses: Response[];
  adverts: Advert[];
  userSession: any;
};
