const horse = {};

const horseRegister = (state = customer, action) => {
  switch (action.type) {
    case 'SET_HORSEINFO':
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
