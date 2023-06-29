import { BUY_ICECREAM } from "../constant";

const initialState = {
  iceCreamCount: 200,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      console.log("from ice cream reducer");
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
