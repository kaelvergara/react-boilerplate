import React from 'react'
import style from './errorText.module.scss'

const ErrorText = (props) => {
  if (!props.error) {
    return null
  }

  const errorMessages = {
    required: 'This field is required',
    maxLength: 'Max length reached',
    minLength: 'Min length required',
    pattern: 'Invalid pattern',
    ...props.messages,
  }

  return (
    <label className={`${props.className} ${style.errorText}`}>
      {errorMessages[props.error.type] || 'Error'}
    </label>
  )
}

export default ErrorText
