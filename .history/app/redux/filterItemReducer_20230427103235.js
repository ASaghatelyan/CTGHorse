const filterState = {
    color: [],
    sex: [],
    height: [],
    weight: [],
    earnings: [],
    breed: [],
    training: [],
    discipline: [],
  };
  
  const filterData = (state = filterState, action) => {
    switch (action.type) {
      case 'SET_FILTERDATA':
        return {
          ...action.payload,
        };
      case 'RESET_FILTERDATA':
        return {
          color: [],
          sex: [],
          height: [],
          weight: [],
          earnings: [],
          breed: [],
          training: [],
          discipline: [],
        };
      default:
        break;
    }
    return state;
  };
  export default filterData;
  