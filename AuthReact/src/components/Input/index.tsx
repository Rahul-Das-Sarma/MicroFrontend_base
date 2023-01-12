import React, { useEffect, useState } from "react";
import "./styles.scss";

type Props = {
  type: string;
  className?: string;
};

const Input = (props: Props) => {
  const { type, className, ...rest } = props;

  return <input type={type} className={`input ${className}`} {...rest} />;
};

export default Input;
