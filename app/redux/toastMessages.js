const config = {};

const toastMessages = (state = config, action) => {
  switch (action.type) {
    case 'SET_TOASTMESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};
export default toastMessages;
