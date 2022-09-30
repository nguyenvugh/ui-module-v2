import React, {ReactNode} from 'react'

type Props = {
  children: ReactNode
  wide?: Boolean
}

const UIButtonGroup: React.FC<Props> = (props: Props) => {
  return (
      <div className={[props.wide ? 'wide' : undefined, "layout-ui-button-group"].join(' ')}>
        {props.children}
      </div>
  )
}


export default UIButtonGroup
