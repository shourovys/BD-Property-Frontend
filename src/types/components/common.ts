import { TSelectValue } from '@/components/atomic/Selector'
import { TButtonColor, TButtonSize } from '@/types/components/buttons'
import {
  DateType,
  DateValueType,
} from 'react-tailwindcss-datepicker/dist/types'

export type TSize = TButtonSize | 'extraLarge' | undefined
export type TColor = TButtonColor | undefined

export type THandleInputChange = (
  name: string,
  value:
    | string
    | number
    | TSelectValue
    | null
    | boolean
    | File
    | FileList
    | Date
    | string[]
) => void

export type THandleInputSelect = (name: string, checked: boolean) => void

export type THandleDateChange = (name: string, value: DateValueType) => void

export type THandleFilterInputChange = (
  name: string,
  value:
    | string
    | number
    | TSelectValue
    | null
    | boolean
    | DateValueType
    | DateType
) => void
// const [image, setImage] = useState<File | string | null | undefined>();

export type TTextAlign = 'center' | 'left' | 'right'

export interface ISelectOption {
  value: string
  label: string
}
export const emptySelectOption = {
  value: '',
  label: '',
}

export type INullAbleSelectOption = {
  value: string
  label: string
} | null

export type INewFormErrors<T> = Partial<Record<keyof T, string>> & {
  non_field_errors?: string
}
