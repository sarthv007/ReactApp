import { combineReducers } from "redux";
import CakeReducer from "./CakeReducer";
import IceCreamReducer from "./IceCreamReducer";
import { CounterReducer } from "./CounterReducer";
import { PostsReducer } from "./PostReducer";

const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  counterReducer: CounterReducer,
  postData: PostsReducer,
});

export default RootReducer;
