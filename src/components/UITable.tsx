import React, { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import { Cols } from 'types'

type Props<T extends { id: string | number }> = {
  columns: Cols<T>[]
  dataSource: T[]
  onDrop?: (selectedRow: T, before?: T, after?: T) => void
}
/**
 * UITable component
 * @param {array} columns Array of columns to display in the table
 * @param {array} dataSource Array of object which must be contain unique id prop
 * @param {Function} onDrop A callback function when drop row which will be returned 'before and after object' of selected row
 */
function UITable<T extends { id: string | number }>({
  columns,
  dataSource,
  onDrop,
}: Props<T>) {
  const [dataOrdered, setDataOrdered] = useState(dataSource)

  function handleDrop(dropResult: DropResult) {
    const destination = dropResult.destination?.index || 0

    let tempData = [...dataOrdered]
    let [selectedRow] = tempData.splice(dropResult.source.index, 1)
    tempData.splice(destination, 0, selectedRow)
    const selectedIndex = tempData.findIndex((row) => row.id === selectedRow.id)
    const before = tempData[selectedIndex - 1]
    const after = tempData[selectedIndex + 1]
    setDataOrdered(tempData)
    onDrop && onDrop(selectedRow, before, after)
  }
  return (
    <DragDropContext onDragEnd={handleDrop}>
      <table className="ui-table">
        <thead>
          <tr>
            <th></th>
            {columns.map((col) => {
              return <th key={col.key}>{col.title}</th>
            })}
          </tr>
        </thead>

        <Droppable droppableId="tbody">
          {(provided) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps}>
              {dataOrdered.map((data, dataIndex) => {
                return (
                  <Draggable
                    key={data.id}
                    draggableId={data.id + ''}
                    index={dataIndex}
                  >
                    {(provided, snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          background: snapshot.isDragging ? '#34c759' : 'unset',
                        }}
                      >
                        <td {...provided.dragHandleProps}></td>
                        {columns.map((col, index) => {
                          return (
                            <td
                              key={index}
                              data-ui-align={col.align || 'center'}
                            >
                              {/* @ts-ignore */}
                              {col.render
                                ? col.render(data, dataIndex)
                                : data[col.dataIndex]}
                            </td>
                          )
                        })}
                      </tr>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
    </DragDropContext>
  )
}

export default UITable
