export const LOGIN_QUERY = {
  login: {
    username: "emilys",
    password: "emilyspass",
  },

  getUser: {
    key: "getUser",
  },

  currentUser: {
    key: "currentUser",
    staleTime: 1000 * 60 * 60 * 24,
  },

  updateUser: {
    key: "updateUser",
  },
};
