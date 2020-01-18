import React from "react";
import "./style/Loading.css";
import Loader from "./Loader";

class Loading extends React.Component {
  render() {
    return (
      <div className="PageLoading">
        <Loader />
      </div>
    );
  }
}
export default Loading;
