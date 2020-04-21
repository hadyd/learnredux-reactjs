import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Home</h1>
      <button className="button" onClick={() => props.history.push("/cakes")}>
        Buy Cakes
      </button>
      <button
        className="button"
        onClick={() => props.history.push("/icecream")}
      >
        Buy Ice Cream
      </button>
    </div>
  );
};

export default withRouter(Home);