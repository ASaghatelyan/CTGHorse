const config = {
  notificationCount: 0
};

const configReducer = (state = config, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
  
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
