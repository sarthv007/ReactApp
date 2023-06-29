import { BUY_CAKE } from "../constant";

const initialState = {
  cakeCount: 100,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log("from cake reducer");
      return {
        ...state,
        cakeCount: state.cakeCount - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
