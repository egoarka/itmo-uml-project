export interface Advert {
  id: string;
  name: string;
  author: string;
  description: string;
  responses: string[];
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

export const defaultState = {
  users: [
    {
      id: 'user-1',
      name: 'Oleg Vladimirovich',
      role: 'customer',
    },
    {
      id: 'user-2',
      name: 'Andrey Petrov',
      role: 'freelancer',
    },
  ],
  responses: [
    {
      id: 'response-1',
      author: 'user-2',
      body: 'I want this work to get done',
    },
  ],
  adverts: [
    {
      id: 'advert-1',
      name: 'Make C# server',
      author: 'user-1',
      description:
        'I thought this salad was exceptionally delicious and healthy. I recommend\npressing the entire tofu block for at least 20 minutes before to remove\nexcess water in the ...',
      responses: ['response-1'],
    },
    {
      id: 'advert-2',
      name: 'Make js server',
      author: 'user-2',
      description:
        'I thought this salad was exceptionally delicious and healthy. I recommend\npressing the entire tofu block for at least 20 minutes before to remove\nexcess water in the ...',
      responses: [],
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
