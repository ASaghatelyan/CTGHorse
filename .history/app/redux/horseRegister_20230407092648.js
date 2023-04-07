const customer = {};

const horseRegister = (state = customer, action) => {
  switch (action.type) {
    case 'SET_HORSEIn':
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
