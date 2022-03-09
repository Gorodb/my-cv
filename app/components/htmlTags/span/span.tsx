import cn from 'classnames';
import {SpanProps} from "./span.props";
import styles from './span.module.scss';

export const Span = ({children, className, ...props}: SpanProps): JSX.Element => {

  return <span className={cn(styles.span, className)} {...props}>{children}</span>;
}
