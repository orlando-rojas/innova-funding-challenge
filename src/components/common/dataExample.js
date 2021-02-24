export const currentUser = {
  name: "orlando rojas",
  id: 1,
};

export const cardsExample = [
  {
    title: "Todo for today",
    users: [currentUser],
  },
  {
    title: "Todo for today",
    users: [
      currentUser,
      {
        name: "jorge gonzales",
        id: 4,
      },
      {
        name: "wilber carrascal",
        id: 3,
      },
    ],
  },
  {
    title: "Todo for today",
    users: [
      currentUser,
      {
        name: "wilber carrascal",
        id: 3,
      },
    ],
  },
  {
    title: "Todo for today",
    users: [
      {
        name: "wilber carrascal",
        id: 3,
      },
    ],
  },
];
