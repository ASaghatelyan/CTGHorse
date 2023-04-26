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
    case 'RESET_':
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
