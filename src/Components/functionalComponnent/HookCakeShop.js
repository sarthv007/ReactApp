import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_CAKE, BUY_ICECREAM } from "../../constant";
import { buyCakeAction } from "../../Actions/cakeActions";
import { buyIceCreamAction } from "../../Actions/iceCreamActions";

function HookCakeShop() {
  const { cakeCount, iceCreamCount } = useSelector((state) => ({
    cakeCount: state.cake.cakeCount,
    iceCreamCount: state.iceCream.iceCreamCount,
  }));

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome to our cake shop</h2>

      <h3>Number of Cakes: {cakeCount}</h3>

      <button onClick={() => dispatch(buyCakeAction())}>Buy Cake</button>

      <h3>Number of Ice Creams: {iceCreamCount}</h3>

      <button onClick={() => dispatch(buyIceCreamAction())}>
        Buy Ice Cream
      </button>
    </div>
  );
}

export default HookCakeShop;
