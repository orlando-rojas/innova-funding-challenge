export const currentUser = {
  name: "orlando rojas",
  imgUrl:
    "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
  id: 1,
  email: "orlando@mail.com",
};

const userJorge = {
  name: "jorge gonzales",
  id: 4,
  email: "jorge@mail.com",
};

const userWilber = {
  name: "wilber carrascal",
  imgUrl:
    "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
  id: 3,
  email: "wilber@mail.com",
};

const userVictor = {
  name: "victor rodriguez",
  id: 2,
  email: "victor@mail.com",
};

export const columnsExample = [
  {
    title: "Todo",
    tasks: [
      {
        title: "Add social networks",
        description: "",
        comments: [
          {
            user: currentUser,
            text: "lorem ipsum is simply dummy text of the",
          },
          {
            user: userJorge,
            text: "lorem ipsum is simply dummy text of the",
          },
          {
            user: userWilber,
            text: "lorem ipsum is simply dummy text of the",
          },
        ],
        tags: [
          {
            name: "Home",
            type: "default",
          },
          {
            name: "Hacer",
            type: "blue",
          },
          {
            name: "Now",
            type: "danger",
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

export const boardExample = {
  title: "Todo for today",
  users: [currentUser, userJorge],
  columns: columnsExample,
};

export const boardsExample = [
  {
    title: "Todo for today",
    users: [currentUser],
    columns: columnsExample,
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
