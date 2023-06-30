import { combineReducers } from "redux";
import CakeReducer from "./CakeReducer";
import IceCreamReducer from "./IceCreamReducer";
import { CounterReducer } from "./CounterReducer";
import { PostsReducer } from "./PostReducer";
import { UserReducer } from "./UserReducer";

const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  counterReducer: CounterReducer,
  postData: PostsReducer,
  user: UserReducer,
});

export default RootReducer;
