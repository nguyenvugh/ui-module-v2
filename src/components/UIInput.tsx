import React from 'react'

type Props = {
  value: string
  type?: string
  placeholder?: string
  disabled?: boolean
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const UIInput: React.FC<Props> = ({
  value,
  type = 'text',
  placeholder = 'テキストを入力',
  disabled = false,
  onChange,
  ...rest
}: Props) => {
  return (
    <input
      className="ui-form-item"
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    />
  )
}

export default UIInput
