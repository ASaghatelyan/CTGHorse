const config = {};

const outOfStack = (state = config, action) => {
  switch (action.type) {
    case 'SET_outOfStack':
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
