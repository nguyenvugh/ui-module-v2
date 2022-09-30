import React, { ReactNode } from 'react'
import {
  UIButtonAlign,
  UIButtonColor,
  UIButtonType,
  UISize,
} from '../constants'

type Props = {
  children: ReactNode
  iconSuffix?: ReactNode
  iconPrefix?: ReactNode
  color?: UIButtonColor
  type?: UIButtonType
  size?: UISize
  round?: Boolean
  disabled?: boolean
  align?: UIButtonAlign
  onClick?: () => void
}

const UIButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={
        props.type === UIButtonType.Round ? 'ui-round-button' : 'ui-button'
      }
      data-ui-color={props.color}
      data-ui-size={props.size || UISize.Medium}
      data-ui-align={props.align}
      data-ui-type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.iconPrefix}
      <div className="ui-button__label">{props.children}</div>
      {props.iconSuffix}
    </button>
  )
}

export default UIButton
