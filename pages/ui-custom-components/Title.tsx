import React from "react";
import { Typography } from "antd";
import { TitleProps as TypoTitleProps } from "antd/lib/typography/Title";
const TypoTitle = Typography;

type TitleProps = TypoTitleProps;

const Title = (props: TitleProps) => {
  return <TypoTitle {...props}></TypoTitle>;
};

export default Title;
