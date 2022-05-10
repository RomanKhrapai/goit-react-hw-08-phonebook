const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurent = state => state.auth.isFetchingCurrentUser;
const getErrorauth = state => state.auth.authError;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurent,
  getErrorauth,
};
export default authSelectors;
