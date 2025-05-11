export const authInitialState = {
  token: null,

  user: {
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
  },

  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: '',
};
