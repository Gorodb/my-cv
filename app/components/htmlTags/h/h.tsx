import cn from 'classnames';
import {HTypeEnum, HProps} from "./h.props";
import styles from './h.module.scss';

export const H = ({type, className, children, ...props}: HProps): JSX.Element => {
  let hTag: JSX.Element;
  switch (type) {
    case HTypeEnum.h1:
      hTag = <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>
      break;
    case HTypeEnum.h2:
      hTag = <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>
      break;
    case HTypeEnum.h3:
      hTag = <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>
      break;
    case HTypeEnum.h4:
      hTag = <h4 className={cn(styles.h4, className)} {...props}>{children}</h4>
      break;
    case HTypeEnum.h5:
      hTag = <h5 className={cn(styles.h5, className)} {...props}>{children}</h5>
      break;
  }

  return hTag;
}
