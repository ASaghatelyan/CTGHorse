const detiles = {};

const userInfo = (state = detiles, action) => {
  switch (action.type) {
    case 'SET_USERINFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_USERINFO':
      return {};
    default:
      break;
  }
  return state;
};
export default userInfo;
