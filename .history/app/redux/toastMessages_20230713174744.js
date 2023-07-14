const config = {};

const configReducer = (state = config, action) => {
  switch (action.type) {
    case 'SET_TOAST':
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
