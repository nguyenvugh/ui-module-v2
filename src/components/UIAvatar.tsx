import { UISize, UIAvatarColor } from '../constants'
import React from 'react'

type Props = {
  color?: UIAvatarColor
  size?: UISize
  src?: String
  icon?: String
  children?: React.ReactNode
}

const UIAvatar: React.FC<Props> = ({
  color,
  size = UISize.Medium,
  src,
  icon,
  children,
}: Props) => {
  let childrenToRender
  if (typeof src === 'string') {
    childrenToRender = (
      <img
        className="ui-avatar__content--image"
        src={src}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null // prevents looping
          currentTarget.src = 'https://placehold.jp/150x150.png'
        }}
      />
    )
  } else if (icon) {
    childrenToRender = (
      <i className="ui-avatar__content--icon ui-icon" data-ui-icon={icon}></i>
    )
  } else {
    childrenToRender = children
  }
  return (
    <div
      className="ui-avatar"
      data-ui-size={size}
      data-ui-color={typeof src === 'string' ? null : color}
    >
      <div className="ui-avatar__content">{childrenToRender}</div>
    </div>
  )
}

export default UIAvatar
