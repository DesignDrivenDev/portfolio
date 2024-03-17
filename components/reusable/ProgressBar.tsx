import React from "react";

const ProgressBar = ({
  bgcolor,
  progress,
  height,
}: {
  bgcolor: string;
  progress: number;
  height: number;
}) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: `${bgcolor}`,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className={`h-${height} w-full bg-white rounded-full m-20`}>
      <div
        className={`h-full w-${progress} bg-${bgcolor} rounded-full text-right`}
      >
        <span className={`p-10 text-black font-medium`}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
