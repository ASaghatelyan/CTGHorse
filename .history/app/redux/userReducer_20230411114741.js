const horse = {};

const userInforma = (state = horse, action) => {
  switch (action.type) {
    case 'SET_HORSEINFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_HORSEINFO':
      return {};
    default:
      break;
  }
  return state;
};
export default horseRegister;
