import React from 'react'

type Props = { checked: boolean } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const UIToggle: React.FC<Props> = ({
  id = 'checkbox',
  checked = false,
  ...toggleProps
}: Props) => {
  return (
    <div className="ui-toggle">
      <input type="checkbox" id={id} checked={checked} {...toggleProps} />
      <label htmlFor={id}></label>
    </div>
  )
}

export default UIToggle
