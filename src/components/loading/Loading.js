import React from "react";
import { BounceLoader } from "react-spinners";
import "./loading.scss";

const Loading = (props) => {
  return (
    <div className="spinner">
      <BounceLoader color={"#13E2DA"} margin={10} loading={props.loading} size={80} />
    </div>
  );
};

export default Loading;
