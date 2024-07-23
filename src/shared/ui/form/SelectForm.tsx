'use client'

import get from 'lodash.get'
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { InputPropsUI } from 'shared/ui'
import { InputErrorMessageForm } from './InputErrorMessageForm'
import classNames from 'classnames'

type SelectHTML = Omit<InputHTMLAttributes<HTMLSelectElement>, 'onBlur' | 'onChange'>

export type InputFormProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  onChange?: (name: Path<TFormValues>, value: string) => void
  onBlur?: (name: Path<TFormValues>, value: string) => void
} & SelectUI &
  SelectHTML

export interface SelectUI {
  label?: string
  className?: string
  options: { value: string; label: string }[]
}

export const SelectForm = <TFormValues extends Record<string, unknown>>(props: InputFormProps<TFormValues>) => {
  const { name, onChange, onBlur, label, options, ...rest } = props
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>()

  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)

  const onChangeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onChange && onChange(name, e.target.value)
  }
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(name, e.target.value)
  }

  return (
    <div className='form__input'>
      <div className='input-label'>{label}</div>
      <div
        className={classNames('input input--select', {
          'input--error': hasError,
        })}
      >
        <select className='input__input' {...(register && register(name, { onChange: onChangeHandler, onBlur: onBlurHandler }))}>
          <option value=''>Выберите</option>
          {options.map((el, i) => {
            return (
              <option key={i} value={el.value}>
                {el.label}
              </option>
            )
          })}
        </select>
        {/* <Select name='country' placeholder='Select your country' options={country} /> */}
        <InputErrorMessageForm errors={errors} name={name} />
      </div>
    </div>
  )
}
