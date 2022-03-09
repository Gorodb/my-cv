import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export enum HTypeEnum {
  h1,
  h2,
  h3,
  h4,
  h5
}

export interface HProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  type: HTypeEnum;
  children: ReactNode;
}
