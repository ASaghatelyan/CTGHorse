const filterState = {
    Color: [],
    Sex: [],
    Height: [],
    Weight: [],
    Earnings: [],
    Breed: [],
    Training: [],
    Discipline: [],
  };

const filterData = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_HORSEINFO':
      return { 
        ...action.payload,
      };
    case 'RESET_FILTER':
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
