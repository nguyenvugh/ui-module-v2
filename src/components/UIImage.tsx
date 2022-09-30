import React from 'react'
import { UIAspect } from '../constants'

type Props = {
  src: string
  aspect?: UIAspect
}

const UIImage: React.FC<Props> = ({ aspect = UIAspect.Default, src }: Props) => {
  return (
    <div className="ui-image" data-ui-aspect={aspect}>
      <img src={src} />
    </div>
  )
}

export default UIImage
