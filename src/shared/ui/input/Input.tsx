'use client'

import classNames from 'classnames'
import { FocusEvent, ForwardedRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, forwardRef, useState } from 'react'

export interface InputPropsUI {
  label?: string
  className?: string
  hasError?: boolean
  errorSlot?: ReactNode
  helperText?: string
  filled?: boolean
  actionsSlot?: ReactNode
}

interface InputHTML extends InputHTMLAttributes<HTMLInputElement> {
  type: string
}
interface TextareaHTML extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

type Props = InputPropsUI & (InputHTML | TextareaHTML)

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
  const { label, hasError, errorSlot, helperText, filled: isFilled, className, actionsSlot, ...rest } = props

  const [filled, setFilled] = useState(Boolean(isFilled || rest.value))

  const allProps = {
    ...rest,
    'aria-label': label,
    'aria-invalid': hasError,
    className: classNames('input__input', className),
  }
  const isInput = 'type' in allProps

  return (
    <>
      <div className='input-head'>
        {props.label && <div className='input-label'>{props.label}</div>}
        <div className='input-actions'>{props.actionsSlot}</div>
      </div>
      <div
        className={classNames('input', {
          'input--textarea': !isInput,
          'input--error': hasError,
          'input--disabled': rest.disabled,
          'input--filled': filled,
        })}
        aria-live='polite'
      >
        {isInput ? (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>}
            {...allProps}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setFilled(Boolean(e.target.value))
              allProps.onBlur && allProps.onBlur(e)
            }}
          />
        ) : (
          <textarea ref={ref as ForwardedRef<HTMLTextAreaElement>} {...allProps} />
        )}
      </div>
      {errorSlot}
    </>
  )
})
Input.displayName = 'InputUI'
