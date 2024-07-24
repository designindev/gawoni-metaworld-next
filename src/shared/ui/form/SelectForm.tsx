'use client'

import get from 'lodash.get'
import React, { InputHTMLAttributes, TextareaHTMLAttributes, useId } from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import { InputPropsUI, Select } from 'shared/ui'
import { InputErrorMessageForm } from './InputErrorMessageForm'
import classNames from 'classnames'
import ReactSelect, { GroupBase, Props } from 'react-select'

type SelectHTML = Omit<InputHTMLAttributes<HTMLSelectElement>, 'onBlur' | 'onChange'>

export type InputFormProps<TFormValues extends FieldValues> = {
  name: string
  onChange?: (name: string, value: string) => void
  onBlur?: (name: string, value: string) => void
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
    control,
  } = useFormContext()
  const id = useId()

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
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ReactSelect instanceId={id} placeholder={'select'} className='input' classNamePrefix='react-select' options={props.options} {...field} />
          )}
          rules={{ required: true }}
        />
        <InputErrorMessageForm errors={errors} name={name} />
      </div>
    </div>
  )
}
