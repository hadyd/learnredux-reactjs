import { ADD, MIN } from "../Action/IceCreamAction";

const initState = {
  iceCream: 0,
};

const Ice = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        iceCream: state.iceCream + 1,
      };
    case MIN:
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };
    default:
      return state;
  }
};

export default Ice;