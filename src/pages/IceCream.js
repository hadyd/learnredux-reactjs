import React from "react";
import { connect } from "react-redux";
import { addIce, minIce } from "../Action/IceCreamAction";
import { withRouter } from "react-router-dom";

const IceCream = (props) => {
  return (
    <div className="icecream">
      <h1>Ice Cream</h1>
      <button
        className="button"
        onClick={() => {
          props.addIce();
        }}
      >
        Buy 1 Ice Cream
      </button>
      <button
        className="button"
        onClick={() => {
          props.minIce();
        }}
      >
        Eat 1 Ice Cream
      </button>
      <h4>I have {props.iceCream} ice cream</h4>
      <div>
        <button onClick={() => props.history.push("/")}>Home</button>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    iceCream: props.Ice.iceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIce: () => dispatch(addIce()),
    minIce: () => dispatch(minIce()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IceCream));