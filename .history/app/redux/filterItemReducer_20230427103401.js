const filterState = {};

const filterItem = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_FILTERITEM':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_FILTERITEM':
      return {};
    default:
      break;
  }
  return state;
};
export default filterData;
