import React from 'react'

type Props = {
  id?: string
  value: any
  label: string
  checked: boolean
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UICheckbox: React.FC<Props> = ({
  id,
  value,
  label,
  checked,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <div className="ui-checkbox">
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default UICheckbox
