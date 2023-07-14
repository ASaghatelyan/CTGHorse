const config = {};

const outOfStack = (state = config, action) => {
  switch (action.type) {
    case 'SET_OUTOFSTACK':
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};
export default outOfStack;
