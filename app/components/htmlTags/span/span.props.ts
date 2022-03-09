import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SpanProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
  children: ReactNode;
}
