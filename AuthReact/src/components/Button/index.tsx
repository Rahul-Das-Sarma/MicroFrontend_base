import React from "react";
import "./styles.scss";
type Props = {
  className?: string;
  title: string;
};

const Button = (props: Props) => {
  const { title, className, ...rest } = props;
  return (
    <button className={`button ${className}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
