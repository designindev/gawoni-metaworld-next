'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { onScrollToBlock } from 'shared/lib'

interface ButtonHTML extends ButtonHTMLAttributes<HTMLButtonElement> {}
interface AnchorHTML extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

type Color = 'primary' | 'secondary' | 'dangerous' | 'success' | 'white'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children?: ReactNode
  color?: Color
  size?: Size
  border?: boolean
  lgWidth?: boolean
  maxWidth?: boolean
  link?: boolean
  loading?: boolean
  disabled?: boolean
  className?: string
} & (AnchorHTML | ButtonHTML)

export const Button = (props: ButtonProps) => {
  const { children, color = 'primary', size = 'md', border, lgWidth, maxWidth, link, loading, disabled, className, ...rest } = props

  const fullClassName = classNames(
    `btn btn--${color}`,
    `btn btn--${size}`,
    {
      'btn--w-lg': lgWidth,
      'btn--w-max': maxWidth,
      'btn--border': border,
      'btn--link': link,
      'btn--loading': loading,
      'btn--disabled': disabled || loading,
    },
    className
  )

  return (
    <>
      {'href' in rest ? (
        rest.href[0] === '#' ? (
          <a className={fullClassName} {...rest} onClick={(e) => onScrollToBlock(e, rest.href)}>
            {children}
          </a>
        ) : (
          <Link {...rest} href={rest.href} className={fullClassName}>
            {children}
          </Link>
        )
      ) : (
        <button className={fullClassName} {...rest} disabled={disabled || loading}>
          {children}
          {loading && (
            <span className='btn__loader'>
              <i></i>
              <i></i>
              <i></i>
            </span>
          )}
        </button>
      )}
    </>
  )
}
