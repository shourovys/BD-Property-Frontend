import { useRouter, useSearchParams } from 'next/navigation'
import QueryString from 'qs'

interface IProps {
  query: object
  pathName: string
}
const useUpdateRouteQuery = () => {
  const router = useRouter()
  const previousQuery = useSearchParams().toString()
  const previousQueryObj = QueryString.parse(previousQuery)

  return ({ query, pathName }: IProps): void => {
    const queryStringValue = QueryString.stringify({
      ...previousQueryObj,
      ...query,
    })

    router.push(pathName + '?' + queryStringValue)
  }
}

export default useUpdateRouteQuery
