import { ReactNode } from 'react'

type Align = 'start' | 'center' | 'end'
type Cols<T> = {
  title: string | ReactNode
  key: string | number
  dataIndex: keyof T
  align?: Align
  render?: (rowData: T, index: number) => React.ReactNode
}
export { Cols }
