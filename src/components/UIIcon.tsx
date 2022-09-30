import React from 'react'
import { UIIconColor, UITheme } from '../constants'

type Props = {
  icon: String
  color?: UIIconColor
  theme?: UITheme
}

const UIIcon: React.FC<Props> = ({
  icon,
  color,
  theme = UITheme.Light,
}: Props) => {
  return (
    <i
      className="ui-icon"
      data-ui-icon={icon}
      data-ui-color={color}
      data-ui-theme={theme}
    ></i>
  )
}

export default UIIcon
