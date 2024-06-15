export interface IAreaImageData {
  id: number
  title: string
  description: string
  areaimage_content?: {
    id: number
    areaimage: number
    town: string
    image: string
  }[]
}

export interface ISliderImageData {
  id: number
  title: string
  image: string
}

export interface ISliderVideoData {
  id: number
  title: string
  video: string
}

interface TitleVideosData {
  id: number
  title: string
  video: string
}

export interface ILandingPageData {
  area_image_data: IAreaImageData
  slider_image_data: ISliderImageData[]
  slider_video_data: ISliderVideoData[]
  title_videos_data: TitleVideosData
}

export interface ISearchLinksResponse {
  id: number
  search_query: string
}
