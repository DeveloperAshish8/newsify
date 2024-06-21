import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="justify-center flex items-center h-[100vh]">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#1A21ED"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
