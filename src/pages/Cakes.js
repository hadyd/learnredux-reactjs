import React from "react";
import { connect } from "react-redux";
import { addCakes, minCakes } from "../Action/CakesAction";
import { withRouter } from "react-router-dom";

const Cakes = (props) => {
  return (
    <div className="cakes">
      <h1>Cakes</h1>
      <button
        className="button"
        onClick={() => {
          props.addCakes();
        }}
      >
        Buy 1 Cakes
      </button>
      <button
        className="button"
        onClick={() => {
          props.minCakes();
        }}
      >
        Eat 1 Cakes
      </button>
      <div>
        <h4>I have {props.cakes} cakes</h4>
        <button onClick={() => props.history.push("/")}>Home</button>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    cakes: props.Cakes.cakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCakes: () => dispatch(addCakes()),
    minCakes: () => dispatch(minCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cakes));