import React from "react";

const Logo = () => {
  return (
    <svg viewBox="0 0 450 100">
      <symbol id="s-text">
        <text textAnchor="middle" x={"50%"} y={"50%"} dy={".3em"}>
          chucnguyen
        </text>
      </symbol>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
    </svg>
  );
};

export default Logo;
