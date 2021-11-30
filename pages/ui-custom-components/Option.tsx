import React from "react";
import { Select } from "antd";
import { ReactNode } from "react";
import { OptionProps as AntDOptionProps } from "antd/lib/select";
const AntDOption = Select.Option;

type OptionProps = AntDOptionProps & {
  children: ReactNode | ReactNode[];
};

const Option: React.FC<OptionProps> = ({ children, ...props }) => {
  return <AntDOption {...props}>{children}</AntDOption>;
};
export default Option;
