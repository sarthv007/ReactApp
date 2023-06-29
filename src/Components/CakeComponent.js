import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY_CAKE, BUY_ICECREAM } from "../constant";

class CakeComponent extends Component {
  render() {
    console.log("From cakeComponent", this.props);
    const { cakeCount, iceCreamCount } = this.props;
    return (
      <div>
        <h2>Welcome to our cake shop</h2>

        <h3>Number of Cakes: {cakeCount}</h3>

        <button onClick={this.props.buyCake}>Buy Cake</button>

        <h3>Number of Ice Creams: {iceCreamCount}</h3>

        <button onClick={this.props.buyIceCream}>Buy Ice Cream</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("from mapStateToProps", state);
  return {
    cakeCount: state.cake.cakeCount,
    iceCreamCount: state.iceCream.iceCreamCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () =>
      dispatch({
        type: BUY_CAKE,
      }),
    buyIceCream: () => {
      dispatch({
        type: BUY_ICECREAM,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
