import React from "react";
import "./styles.scss";

type Props = {
  variant: "outline" | "primary";
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
};

const Card = (props: Props) => {
  const { variant, children, width, height, color, padding } = props;
  return (
    <div
      className={`${variant}`}
      style={{
        width: width,
        height: height,
        backgroundColor: color ? color : "#fff",
        padding: padding,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
