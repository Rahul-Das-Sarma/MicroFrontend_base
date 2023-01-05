import React, { useEffect, useState } from "react";
import "./styles.scss";

type Props = {
  type: string;
  className?: string;
};

const Input = (props: Props) => {
  const { type, className, ...rest } = props;
  const [styleName, setStyleName] = useState("input");
  useEffect(() => {
    if (className) {
      setStyleName(className);
    }
  }, [className]);
  return <input type={type} className={styleName} {...rest} />;
};

export default Input;
