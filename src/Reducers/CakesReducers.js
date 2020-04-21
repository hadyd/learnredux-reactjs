import { INCREMENT, DECREMENT } from "../Action/CakesAction";

const initState = {
  cakes: 0,
};

const Cakes = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cakes: state.cakes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cakes: state.cakes - 1,
      };
    default:
      return state;
  }
};

export default Cakes;