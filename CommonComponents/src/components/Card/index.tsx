import React from "react";
import "./styles.scss";

type Props = {
  variant: "outline" | "primary";
  children: React.ReactNode;
  width?: string;
  height?: string;
};

const Card = (props: Props) => {
  const { variant, children, width, height } = props;
  return (
    <div className={`${variant}`} style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

export default Card;
