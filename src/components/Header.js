import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar">
        <li>Total Cakes : {props.cakes}</li>
        <li>Total Ice Cream : {props.iceCream}</li>
      </nav>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    cakes: props.Cakes.cakes,
    iceCream: props.Ice.iceCream,
  };
};

export default connect(mapStateToProps, null)(Header);