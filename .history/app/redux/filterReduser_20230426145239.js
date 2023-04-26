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

const horseRegister = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_HORSEINFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_HORSEINFO':
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
export default horseRegister;
