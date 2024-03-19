import Loader from "@/components/util/loader/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
