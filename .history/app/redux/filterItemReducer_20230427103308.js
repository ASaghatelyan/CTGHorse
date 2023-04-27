const filterState = {};

const filterData = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_FILTERITEM':
      return {
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
