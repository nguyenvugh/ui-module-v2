import React, { ReactNode } from 'react'
import {UITagColor} from "../constants";

type Props = {
    children: ReactNode
    color?: UITagColor
}

const UITag: React.FC<Props> = (props: Props) => {
    return (
        <span className="ui-tag" data-ui-color={props.color}>{props.children}</span>
    )
}

export default UITag
