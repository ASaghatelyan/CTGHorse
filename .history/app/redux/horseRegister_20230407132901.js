const horse = {};

const horseRegister = (state = horse, action) => {
  switch (action.type) {
    case 'SET_HORSEINFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_HORSEINFO':
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};
export default horseRegister;
