export interface IBlogData {
  id: string
  is_selected: boolean
  title: string
  image: string
  description: string
  category: {
    id: number
    name: string
  }
  created_at: string
}

export interface IBlogDetailsResponse {
  bloge_details: IBlogData
  related_post: IBlogData[]
}
