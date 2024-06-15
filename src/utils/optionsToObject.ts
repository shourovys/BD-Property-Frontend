import { ISelectOption } from "@/types/components/common"

function optionsToObject(options: ISelectOption[]): { [key: string]: string } {
  return options.reduce((acc, option) => {
    acc[option.value] = option.label
    return acc
  }, {} as { [key: string]: string })
}

export default optionsToObject
