const filterState = {
  color: [],
  sex: [],
  Height: [],
  Weight: [],
  Earnings: [],
  Breed: [],
  Training: [],
  Discipline: [],
};

const filterData = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_FILTERDATA':
      return {
        ...action.payload,
      };
    case 'RESET_FILTERDATA':
      return {
        Color: [],
        Sex: [],
        Height: [],
        Weight: [],
        Earnings: [],
        Breed: [],
        Training: [],
        Discipline: [],
      };
    default:
      break;
  }
  return state;
};
export default filterData;
