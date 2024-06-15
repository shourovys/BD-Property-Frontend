import { ISelectOption } from '@/types/components/common'

const findNameOption = (
  options: { label: string; value: string }[],
  value: string | number
): { label: string; value: string } | null => {
  return options.find((option) => option.value === value.toString()) || null
}

const findSelectOption = (
  options: ISelectOption[],
  value: string | number
): ISelectOption | null => {
  return options.find((option) => option.value === value.toString()) || null
}

const findNameOptionOrDefault = (
  options: { label: string; value: string }[],
  value: string | number
): { label: string; value: string } => {
  return (
    options.find((option) => option.value === value.toString()) || options[0]
  )
}

const findSelectOptionOrDefault = (
  options: ISelectOption[],
  value: string | number
): ISelectOption => {
  return (
    options.find((option) => option.value === value.toString()) || options[0]
  )
}

export {
  findNameOption,
  findNameOptionOrDefault,
  findSelectOption,
  findSelectOptionOrDefault,
}
