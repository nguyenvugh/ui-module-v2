import React, { ReactNode } from 'react'

const disableStyle = {
  background: '#a8a8a9',
  color: '#6c6666',
  borderColor: '#cbc3c3',
}
type TabItem = {
  label: string
  key: string
  children: ReactNode
  disabled?: boolean
}

type Props = {
  items: TabItem[]
  onChange: (item: TabItem) => void
  activeKey?: string
}

const UITab: React.FC<Props> = (props: Props) => {
  const { items, onChange, activeKey } = props
  const [selectedItem, setSelectedItem] = React.useState(items[0])

  React.useEffect(() => {
    const item = items.find((item) => item.key === activeKey) || items[0]
    setSelectedItem(item)
  }, [activeKey])

  function handleChange(item: TabItem) {
    if (item.disabled) return
    setSelectedItem(item)
    onChange(item)
  }

  return (
    <div className="ui-tab">
      <div className="ui-tab__select">
        {items.map((item) => {
          const isSelected = item.key === selectedItem.key
          return (
            <div
              key={item.key}
              className={`ui-tab__select__item${isSelected ? ' selected' : ''}`}
              onClick={() => handleChange(item)}
              style={item.disabled ? disableStyle : {}}
            >
              {item.label}
            </div>
          )
        })}
      </div>

      <div className="ui-tab__content">{selectedItem.children}</div>
    </div>
  )
}

export default UITab
