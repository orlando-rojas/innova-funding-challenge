export const currentUser = {
  name: "orlando rojas",
  id: 1,
};

const userJorge = {
  name: "jorge gonzales",
  id: 4,
};

const userWilber = {
  name: "wilber carrascal",
  id: 3,
};

const userVictor = {
  name: "victor rodriguez",
  id: 2,
};

export const boardExample = {
  title: "Todo for today",
  users: [currentUser],
};

export const columnsExample = [
  {
    title: "Todo",
    tasks: [
      {
        title: "Add social networks",
        description: "",
        tags: ["Home", "Hacer", "Now"],
        comments: [
          {
            user: currentUser,
            comment: "lorem ipsum is simply dummy text of the",
          },
          {
            user: userJorge,
            comment: "lorem ipsum is simply dummy text of the",
          },
          {
            user: userWilber,
            comment: "lorem ipsum is simply dummy text of the",
          },
        ],
      },
      {
        title: "What are you looking for",
      },
      {
        title: "You still here, leave!!",
      },
      {
        title: "You are a bad boy, know ",
      },
      {
        title: "We use DynamoDB from AWS",
      },
      {
        title: "This was made with react",
      },
      {
        title: "We use lambda too",
      },
      {
        title: "SNS for notification",
      },
      {
        title: "WebSocket for real time",
      },
      {
        title: "And for you with love <3",
      },
    ],
  },
  {
    title: "Todo",
    tasks: [],
  },
];

export const usersExample = [currentUser, userJorge, userWilber, userVictor];

export const boardsExample = [
  {
    title: "Todo for today",
    users: [currentUser],
  },
  {
    title: "Todo for today",
    users: [currentUser, userJorge, userWilber],
  },
  {
    title: "Todo for today",
    users: [currentUser, userWilber],
  },
  {
    title: "Todo for today",
    users: [userVictor],
  },
];
