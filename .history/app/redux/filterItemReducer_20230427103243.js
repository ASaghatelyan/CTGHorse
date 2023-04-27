const filterState = {};

const filterData = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_FILTERDATA':
      return {
        ...action.payload,
      };
    case 'RESET_FILTERDATA':
      return {
        
      };
    default:
      break;
  }
  return state;
};
export default filterData;
