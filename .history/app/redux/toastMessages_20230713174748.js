const config = {};

const configReducer = (state = config, action) => {
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
export default configReducer;
