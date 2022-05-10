import classNames from 'classnames'
import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './click.module.css'

export const Click: FC<{
  className?: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode,
}> = ({ className, onClick, children }) => {
  return <button type="button" className={classNames(className, styles.click)} onClick={onClick}>{children}</button>
}
