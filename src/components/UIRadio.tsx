import React from 'react'

type Props = {
  id?: string
  name: string
  value: any
  label: string
  checked: boolean
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UIRadio: React.FC<Props> = ({
  id,
  name,
  value,
  label,
  checked,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <div className="ui-radio">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default UIRadio
